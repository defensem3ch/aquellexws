import React from 'react';
import PropTypes from 'prop-types';

import styles from './Music.module.css';

const Music = ({ title, genre, children }) => (
  <article className={styles.music}>
    <h4 className={styles.musicEntryTitle}>
      <span>{title}</span> &#8729; {genre}
    </h4>
    {children}
  </article>
);

Music.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Music;
