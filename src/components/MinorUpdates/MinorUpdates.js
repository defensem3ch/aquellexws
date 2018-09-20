import React from 'react';
import PropTypes from 'prop-types';

import styles from './MinorUpdates.module.css';

const MinorUpdates = ({ children }) => <div className={styles.minorUpdates}>{children}</div>;

MinorUpdates.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MinorUpdates;
