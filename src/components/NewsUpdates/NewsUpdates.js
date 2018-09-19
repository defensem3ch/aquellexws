import React from 'react';
import Link from 'gatsby-link';

import styles from './NewsUpdates.module.css';

const NewsUpdates = ({ children }) => <div className={styles.newsUpdates}>{children}</div>;

export default NewsUpdates;
