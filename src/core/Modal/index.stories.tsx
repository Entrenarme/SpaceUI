import * as React from 'react';
import { storiesOf } from '@storybook/react';

import H2 from '../Text/H2/index';

import Dialog from './index';

interface State {
  openModal: boolean;
}

interface Props {
  noMargins?: boolean;
  style?: {};
}

class ModalTestEnviroment extends React.Component<Props, State> {
  state: State = {
    openModal: false,
  };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ openModal: true })}>
          Open Modal
        </button>
        <p>
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem{' '}
        </p>
        <p>
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem{' '}
        </p>
        <p>
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem{' '}
        </p>
        <p>
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem{' '}
        </p>
        <p>
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          Lorem{' '}
        </p>
        <Dialog
          open={this.state.openModal}
          onClose={() => this.setState({ openModal: false })}
          noMargins={this.props.noMargins}
          style={this.props.style}
        >
          <H2>Hola</H2>
          <p>
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem
          </p>
        </Dialog>
      </div>
    );
  }
}

storiesOf('Dialog', module)
  .add('Normal', () => <ModalTestEnviroment />)
  .add('With no margins content', () => <ModalTestEnviroment noMargins />)
  .add('With custom styles', () => (
    <ModalTestEnviroment style={{ content: { maxWidth: '100px' } }} />
  ));
