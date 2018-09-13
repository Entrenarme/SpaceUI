// @flow
import * as React from 'react';
import Modal from 'react-modal';

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
};

type State = {
  open: boolean,
};

class Dialog extends React.Component<Props, State> {
  state = {
    open: false,
  };

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { children } = this.props;

    return (
      <Modal
        isOpen={open}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {children}
      </Modal>
    );
  }
}

export default Dialog;
