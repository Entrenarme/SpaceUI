import * as React from 'react';
import styled from 'styled-components';

import ButtonGroup from './ButtonGroup';
import Button from './index';
import colors from '../../helpers/colors';

interface State {
  activeButtonLabel: string | null;
}

const StyledButtonGroup = styled(ButtonGroup)`
  height: 29px;
`;

class ButtonGroupSample extends React.Component<{}, State> {
  state: State = {
    activeButtonLabel: 'Button 1',
  };

  onButtonClick = (label: React.SyntheticEvent<HTMLButtonElement>) => {
    const name = label.currentTarget ? label.currentTarget.name : '';
    this.setState({ activeButtonLabel: name });
  };

  render() {
    const { activeButtonLabel } = this.state;
    return (
      <div
        style={{
          background: 'linear-gradient(225deg, #64DEE9 0%, #5151E5 100%)',
          marginTop: '50px',
          padding: '20px',
        }}
      >
        <StyledButtonGroup>
          <Button
            outLined={activeButtonLabel === 'Button 1' ? false : true}
            bgColor={activeButtonLabel === 'Button 1' ? 'white' : 'transparent'}
            textColor={
              activeButtonLabel === 'Button 1' ? colors.blue.text : 'white'
            }
            label="Button 1"
            name="Button 1"
            onClick={this.onButtonClick}
          />
          <Button
            outLined={activeButtonLabel === 'Button 2' ? false : true}
            bgColor={activeButtonLabel === 'Button 2' ? 'white' : 'transparent'}
            textColor={
              activeButtonLabel === 'Button 2' ? colors.blue.text : 'white'
            }
            label="Button 2"
            name="Button 2"
            onClick={this.onButtonClick}
          />
        </StyledButtonGroup>
      </div>
    );
  }
}

export default ButtonGroupSample;
