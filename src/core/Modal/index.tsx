import * as React from 'react';
import * as Modal from 'react-modal';

import './styles/custom.css';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
  open: boolean;
  onClose: Function;
  // noMargins remove padding and margin of the current modal, because some of
  // them implement images and other stuff that dosent need spaces
  noMargins?: boolean;
  style?: {};
}

interface State {
  open: boolean;
}

class Dialog extends React.Component<Props, State> {
  render() {
    const { children, open, onClose, noMargins, style } = this.props;

    return (
      <Modal
        isOpen={open}
        onRequestClose={() => onClose()}
        className={noMargins ? 'ModalNoMargins' : 'Modal'}
        style={style}
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        {children}
      </Modal>
    );
  }
}

export default Dialog;
