import React from 'react';
import PropTypes from 'prop-types';

import styles from './SiteWrapper.module.css';

const SiteWrapper = ({ children }) => <div className={styles.siteWrapper}>{children}</div>;

SiteWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteWrapper;
