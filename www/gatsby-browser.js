/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { preToCodeBlock } from 'mdx-utils';
import { useMDXScope } from 'gatsby-plugin-mdx/context';
import H1 from './src/components/markdown/H1';
import H2 from './src/components/markdown/H2';
import H3 from './src/components/markdown/H3';

const Code = ({ codeString, language, ...props }) => {
	const components = useMDXScope();
	if (props['react-live']) {
		return (
			<div style={{ marginBottom: '3rem' }}>
				<LiveProvider code={codeString} scope={components}>
					<LivePreview
						className="live-preview"
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							padding: '8px 12px',
							border: '2px solid rgba(0,0,0,0.1',
							borderRadius: '4px'
						}}
					/>
					<LiveEditor padding={10} style={{ background: '#000', caretColor: '#fff', fontSize: '14px' }} />
					<LiveError style={{ margin: '0', padding: '10px', background: '#f8d7da', fontSize: '14px' }} />
				</LiveProvider>
			</div>
		);
	} else {
		return (
			<Highlight {...defaultProps} code={codeString} language={language}>
				{({ className, style, tokens, getLineProps, getTokenProps }) => (
					<pre className={className} style={style}>
						{tokens.map((line, i) => (
							<div {...getLineProps({ line, key: i })}>
								{line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		);
	}
};

// components is its own object outside of render so that the references to
// components are stable
const components = {
	h1: H1,
	h2: H2,
	h3: H3,
	pre: (preProps) => {
		const props = preToCodeBlock(preProps);
		// if there's a codeString and some props, we passed the test
		if (props) {
			return <Code {...props} />;
		} else {
			// it's possible to have a pre without a code in it
			return <pre {...preProps} />;
		}
	}
};

export const wrapRootElement = ({ element }) => {
	return <MDXProvider components={components}>{element}</MDXProvider>;
};
