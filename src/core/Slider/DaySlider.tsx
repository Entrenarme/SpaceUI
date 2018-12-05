import * as React from 'react';
import styled from 'styled-components';
import ReactSlider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/pro-light-svg-icons';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './styles/slick-theme.css';
import './styles/slick.css';

import colors from '../../helpers/colors';

interface Props {
  children: React.ReactNode;
  variableWidth?: boolean;
  swipeToSlide?: boolean;
  infinite?: boolean;
  afterSlideChange?: (current: number) => void;
  showLeftArrow: boolean;
  showRightArrow: boolean;
}

const Icon = styled(FontAwesomeIcon)`
  width: 13px !important;
  height: 20px !important;
  color: white !important;
  background-color: transparent !important;

  @media (min-width: 768px) {
    color: ${colors.gray.slideArrow} !important;
  }
`;

const SlideButton = styled.button`
  background: none;
  border: none;
`;

interface ReactSliderProps {
  options: {
    showLeftArrow: boolean;
    showRightArrow: boolean;
  };
}

const StyledReactSlider = styled(ReactSlider)<ReactSliderProps>`
  .slick-prev {
    left: -15px;
    ${props => !props.options.showLeftArrow && 'opacity: 0'};
  }

  .slick-next {
    right: -15px;
    ${props => !props.options.showRightArrow && 'opacity: 0'};
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
    variableWidth: false,
    swipeToSlide: true,
    afterSlideChange: () => {},
    showLeftArrow: true,
    showRightArrow: true,
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
  stopDragging = (currentSlide: number) => {
    const { afterSlideChange } = this.props;
    this.setState({ isDragging: false });
    if (afterSlideChange) {
      afterSlideChange(currentSlide);
    }
  };

  render() {
    const { children, showLeftArrow, showRightArrow, ...rest } = this.props;
    return (
      <Provider value={this.state}>
        <StyledReactSlider
          options={{ showLeftArrow, showRightArrow }}
          slidesToShow={14}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 7,
              },
            },
          ]}
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
