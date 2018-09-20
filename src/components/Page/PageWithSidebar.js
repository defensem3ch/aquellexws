import React from 'react';
import PropTypes from 'prop-types';

import PageFooter from './PageFooter';

const PageWithSidebar = ({ updated, children }) => (
  <article>
    {children}
    <PageFooter updated={updated} />
  </article>
);

PageWithSidebar.propTypes = {
  updated: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageWithSidebar;
