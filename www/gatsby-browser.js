/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Highlight, {
  defaultProps
} from "prism-react-renderer";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from "react-live";
import { preToCodeBlock } from "mdx-utils";
import { useMDXScope } from "gatsby-plugin-mdx/context";

const Code = ({ codeString, language, ...props }) => {
    const components = useMDXScope()
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString.trim()} scope={components}>
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    );
  } else {
    return (
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps
        }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span
                    {...getTokenProps({ token, key })}
                  />
                ))}
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
  pre: preProps => {
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
  return (
    <MDXProvider components={components}>
            {element}
    </MDXProvider>
  );
};
