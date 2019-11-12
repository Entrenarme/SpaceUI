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
  header?: JSX.Element | Array<JSX.Element>;
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

        <Dialog
          open={this.state.openModal}
          onClose={() => this.setState({ openModal: false })}
          style={this.props.style}
          header={this.props.header}
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
  .add('With custom styles', () => (
    <ModalTestEnviroment style={{ content: { maxWidth: '100px' } }} />
  ))
  .add('With header', () => <ModalTestEnviroment header={<p>hahahaha</p>} />);
