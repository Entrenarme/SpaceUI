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
  // noMargins remove padding and margin of the current modal, because some of
  // them implement images and other stuff that dosent need spaces
  noMargins?: boolean,
};

type State = {
  open: boolean,
};

class Dialog extends React.Component<Props, State> {
  render() {
    const { children, open, onClose, noMargins } = this.props;

    return (
      <Modal
        isOpen={open}
        onRequestClose={() => onClose()}
        className={noMargins ? 'ModalNoMargins' : 'Modal'}
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        {children}
      </Modal>
    );
  }
}

export default Dialog;
