import * as React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

const Modal = ({ isOpen, label, children }) => {
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
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  isOpen: false,
  label: null,
};

export default Modal;
