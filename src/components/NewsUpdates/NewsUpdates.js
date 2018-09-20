import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewsUpdates.module.css';

const NewsUpdates = ({ children }) => <div className={styles.newsUpdates}>{children}</div>;

NewsUpdates.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NewsUpdates;
