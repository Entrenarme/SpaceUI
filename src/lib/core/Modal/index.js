// @flow
import * as React from 'react';
import Modal from 'react-modal';

import './styles/custom.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

type Props = {
  children: React.Node,
  open: boolean,
  onClose: Function,
};

type State = {
  open: boolean,
};

class Dialog extends React.Component<Props, State> {
  render() {
    const { children, open, onClose } = this.props;

    return (
      <Modal
        isOpen={open}
        onRequestClose={() => onClose()}
        className="Modal"
        overlayClassName="Overlay"
      >
        {children}
      </Modal>
    );
  }
}

export default Dialog;
