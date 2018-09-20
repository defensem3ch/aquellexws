import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Event.module.css';

const Gigs = ({ event }) => (
  <p>
    <span className={classnames(event.upcoming ? styles.upcoming : styles.previous)}>
      {event.date}
    </span>
    {' // '}
    <a href={event.url} target="_blank" rel="noopener noreferrer">
      {event.event}
    </a>
  </p>
);

Gigs.propTypes = {
  event: PropTypes.shape({
    date: PropTypes.string.isRequired,
    upcoming: PropTypes.bool.isRequired,
    event: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Gigs;
