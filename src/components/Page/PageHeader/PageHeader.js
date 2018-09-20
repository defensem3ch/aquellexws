import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ children }) => <header>{children}</header>;

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeader;
