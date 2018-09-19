import React from 'react';

import styles from './Row.module.css';

const Row = ({ reverse, children }) => (
  <div
    className={styles.row}
    style={{
      flexDirection: reverse ? 'row-reverse' : 'row',
    }}
  >
    {children}
  </div>
);

export default Row;
