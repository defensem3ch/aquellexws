import * as React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

class Modal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { isOpen, label, children } = this.props;
    const styles = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
      },
      content: {
        backgroundColor: '#0C071E',
        border: 0,
        borderRadius: 0,
        fontFamily: '"pxplus_ibm_vga8regular", sans-serif',
      },
    };

    return (
      <ReactModal contentLabel={label} isOpen={isOpen} style={styles}>
        {children}
      </ReactModal>
    );
  }
}

export default Modal;
