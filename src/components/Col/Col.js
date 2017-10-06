import React from 'react'
import classnames from 'classnames'

import styles from './Col.module.css'

const mapStyles = (size, cssModule) => {
  return size ? cssModule[size] : ''
}

const Col = ({ sm, md, lg, style, children }) => {
  return (
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
  )
}

export default Col
