import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

import styles from './PageFooter.module.css';

const PageFooter = ({ updated }) => {
  const updateTime = format(new Date(updated), 'DD/MM/YYYY, HH:MM:SS ZZ');

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
