/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

import styles from './NewsItem.module.css';

const NewsItem = ({ node }) => (
  <div className={styles.root}>
    <h3 className={styles.title}>
      <span>
        {format(new Date(node.fields.date), 'DD.MM.YYYY')}
        {' // '}
        {node.frontmatter.title}
      </span>
    </h3>
    <div dangerouslySetInnerHTML={{ __html: node.html }} />
  </div>
);

NewsItem.propTypes = {
  node: PropTypes.object.isRequired,
};

export default NewsItem;
