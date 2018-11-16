import * as React from 'react';
import styled from 'styled-components';
import ReactSlider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/pro-light-svg-icons';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './styles/slick-theme.css';
import './styles/slick.css';

interface Props {
  children: React.ReactNode;
  variableWidth?: boolean;
  swipeToSlide?: boolean;
  infinite?: boolean;
}

const Icon = styled(FontAwesomeIcon)`
  width: 13px !important;
  height: 20px !important;
  color: white !important;
  background-color: transparent !important;
`;

const SlideButton = styled.button`
  background: none;
  border: none;
`;

const StyledReactSlider = styled(ReactSlider)`
  .slick-prev {
    left: -15px;
  }

  .slick-next {
    right: -15px;
  }
`;

interface SlideProps {
  children: React.ReactNode;
  keyValue: number | string;
  onClick?: (infoSlide: any) => any;
  isDragging?: boolean;
}

const { Provider, Consumer } = React.createContext<{ isDragging: boolean }>({
  isDragging: false,
});

class Slide extends React.Component<SlideProps> {
  onClick = () => {
    const { onClick, keyValue, isDragging } = this.props;
    if (onClick && !isDragging) {
      onClick(keyValue);
    }
  };

  render() {
    const { children } = this.props;
    return <SlideButton onClick={this.onClick}>{children}</SlideButton>;
  }
}

interface State {
  isDragging: boolean;
}

class DaySlider extends React.Component<Props, State> {
  static defaultProps = {
    variableWidth: true,
    swipeToSlide: true,
  };

  static Slide = (props: SlideProps) => (
    <Consumer>
      {context => <Slide {...props} isDragging={context.isDragging} />}
    </Consumer>
  );

  state: State = {
    isDragging: false,
  };

  startDragging = () => this.setState({ isDragging: true });
  stopDragging = () => this.setState({ isDragging: false });

  render() {
    const { children, ...rest } = this.props;
    return (
      <Provider value={this.state}>
        <StyledReactSlider
          prevArrow={<Icon icon={faAngleLeft} />}
          nextArrow={<Icon icon={faAngleRight} />}
          beforeChange={this.startDragging}
          afterChange={this.stopDragging}
          {...rest}
        >
          {children}
        </StyledReactSlider>
      </Provider>
    );
  }
}

export default DaySlider;
