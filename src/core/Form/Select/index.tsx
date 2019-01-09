import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/pro-light-svg-icons';

import OutsideClick from '../../../helpers/OutsideClick';
import { regularFont } from '../../../helpers/fonts';

interface Props {
  // This function takes user selection
  onChange: Function;
  // This array contains all options in object format:
  // { text: 'Opcion 3', value: 'op3', selected (optional): true }
  options: Array<Object>;
  className?: string;
  // Where options will show
  anchor?: 'bottom' | 'top';
  // The width of the element
  width: number;
}

interface State {
  showOptions: boolean;
  activeElement: string | Object;
  inputHeight: number;
}

interface Option {
  text: string;
  value: string;
  selected?: boolean;
}

const SelectContainer = styled.div`
  position: relative;
  font-family: ${regularFont};
  color: #fff;
`;

const SelectInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 10px;
`;

interface SelectOptionsProps {
  options: {
    anchor?: string;
    inputHeight: number;
  };
}

const SelectOptions = styled.div`
  position: absolute;
  bottom: ${(props: SelectOptionsProps) =>
    props.options.anchor === 'bottom'
      ? `${props.options.inputHeight + 5}px`
      : null};
  padding: 10px;
  color: #000;
  border: 1px solid #fff;
  background-color: #fff;
  border-radius: 3px;
  margin-top: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const SimpleOption = styled.div`
  cursor: pointer;
`;

class Select extends React.Component<Props, State> {
  state = {
    showOptions: false,
    inputHeight: 0,
    activeElement: {
      text: 'Selecciona una opción',
      value: null,
    },
  };

  componentDidMount() {
    const element = document.querySelector('.select-input') as HTMLElement;

    this.setState({ inputHeight: element.offsetHeight });

    this.props.options.map((option: Option) => {
      if (option.selected) {
        this.setState({
          activeElement: option,
        });
      }

      return;
    });
  }

  renderOptions = () => {
    return this.props.options.map((option: Option) => {
      return (
        <SimpleOption
          key={option.text}
          className="select-option"
          onClick={() =>
            this.setState({ activeElement: option, showOptions: false })
          }
        >
          {option.text}
        </SimpleOption>
      );
    });
  };

  render() {
    const { anchor } = this.props;

    const { inputHeight } = this.state;

    return (
      <React.Fragment>
        <OutsideClick
          outSideAction={() => this.setState({ showOptions: false })}
          style={{ width: `${this.props.width}px` }}
        >
          <SelectContainer
            className={`${this.props.className} select-container`}
          >
            <SelectInput
              className="select-input"
              onClick={() =>
                this.setState(prevState => ({
                  showOptions: !prevState.showOptions,
                }))
              }
            >
              {this.state.activeElement.text}
              <FontAwesomeIcon icon={faAngleDown} />
            </SelectInput>
            {this.state.showOptions ? (
              <SelectOptions
                className="select-options-container"
                options={{ anchor, inputHeight }}
              >
                {this.renderOptions()}
              </SelectOptions>
            ) : null}
          </SelectContainer>
        </OutsideClick>
      </React.Fragment>
    );
  }
}

export default Select;
