import React from 'react';
import classnames from 'classnames';

import styles from './Col.module.css';

const mapStyles = (size, cssModule) => (size ? cssModule[size] : '');

const Col = ({ sm, md, lg, style, children }) => (
  <div
    className={classnames(
      styles.col,
      mapStyles(sm, styles),
      mapStyles(md, styles),
      mapStyles(lg, styles)
    )}
    style={style}
  >
    {children}
  </div>
);

export default Col;
