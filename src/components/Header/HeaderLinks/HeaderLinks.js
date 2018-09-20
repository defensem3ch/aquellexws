import React from 'react';
import { Link } from 'gatsby';

import styles from './HeaderLinks.module.css';

const HeaderLinks = () => (
  <div className={styles.headerLinks}>
    <Link to="/about">about</Link> &#8729; <Link to="/music">music</Link> &#8729;{' '}
    <Link to="/goodies">goodies</Link>
  </div>
);

export default HeaderLinks;
