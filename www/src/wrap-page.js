const React = require('react');
const { MDXProvider } = require('@mdx-js/react');

const components = {
  wrapper: (props) => <React.Fragment {...props} />
};

module.exports = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);