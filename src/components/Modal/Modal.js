import * as React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'

class Modal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  render () {
    const { isOpen, label, children } = this.props

    return (
      <ReactModal contentLabel={label} isOpen={isOpen}>
        {children}
      </ReactModal>
    )
  }
}
