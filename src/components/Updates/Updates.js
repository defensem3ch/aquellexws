import React from 'react';
import PropTypes from 'prop-types';

import styles from './Updates.module.css';

const Updates = ({ title, children }) => (
  <div className={styles.root}>
    <p>{title}</p>
    <div className={styles.inner}>{children}</div>
  </div>
);

Updates.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Updates;
