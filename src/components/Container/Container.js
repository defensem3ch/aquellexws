import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Container.module.css';

const Container = ({ className, style, children }) => (
  <div className={classnames(styles.container, className)} style={style}>
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: null,
  style: null,
};

export default Container;
