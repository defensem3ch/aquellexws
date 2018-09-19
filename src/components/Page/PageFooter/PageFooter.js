import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageFooter.module.css';

const PageFooter = ({ updated }) => {
  const updateTime = new Date(Date.parse(updated)).toLocaleString();

  return (
    <footer className={styles.pageFooter}>
      <p>Last Updated: {updateTime}</p>
    </footer>
  );
};

PageFooter.propTypes = {
  updated: PropTypes.string.isRequired,
};

export default PageFooter;
