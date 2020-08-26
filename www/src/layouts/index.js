// import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import React from 'react';

import NavMain from '../components/NavMain';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function DefaultLayout({ children, location, grayscale = true }) {
  return (
    <div>
      <p>MAIN</p>
      {/* <NavMain activePage={location.pathname} /> */}
      {/* <DocsAlert />
      <MDXProvider components={components}>{children}</MDXProvider> */}
    </div>
  );
}

DefaultLayout.propTypes = propTypes;

export default DefaultLayout;
