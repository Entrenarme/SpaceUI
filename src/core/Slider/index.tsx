import * as React from 'react';
import ReactSlider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/pro-light-svg-icons';
import styled from 'styled-components';

// import './styles/slick-theme.css';
// import './styles/slick.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
  children: JSX.Element | Array<JSX.Element>;
  itemsToShow: number;
  disableDots?: boolean;
  invertedArrows?: boolean;
  disableArrows?: boolean;
  initialSlide?: number;
  maxHeightSlick?: string;
  beforeChange?: () => any;
  afterChange?: () => any;
};

type ArrowProps = {
  className?: string;
  style?: {};
  onClick?: () => {};
  icon: IconProp;
  disabled?: boolean;
  invertedArrows?: boolean;
};

interface StyledSliderProps {
  options: {
    less: boolean;
    maxHeightSlick: string;
  };
}

const StyledSlider = styled(ReactSlider)<StyledSliderProps>`
  .slick-track {
    width: ${props => (props.options.less ? null : '100% !important')};
    display: ${props => (props.options.less ? null : 'flex !important')};
    justify-content: ${props =>
      props.options.less ? null : 'space-between !important'};
  }

  .slick-list {
    max-height: ${props =>
      props.options.maxHeightSlick ? props.options.maxHeightSlick : null};
  }
`;

const Arrow = ({
  className,
  style,
  onClick,
  icon,
  disabled,
  invertedArrows,
}: ArrowProps) => {
  if (disabled) {
    return null;
  }

  return (
    <div
      className={invertedArrows ? `${className} slick-secondary` : className}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

const Slider = ({
  children,
  itemsToShow,
  disableDots,
  invertedArrows,
  disableArrows,
  initialSlide,
  maxHeightSlick = '',
  beforeChange,
  afterChange,
}: Props) => {
  const settings = {
    dots: disableDots ? false : true,
    slidesToShow: itemsToShow,
    slidesToScroll: itemsToShow,
    infinite: React.Children.count(children) >= itemsToShow,
    initialSlide,
    centerMode: true,
    beforeChange,
    afterChange,
    nextArrow: (
      <Arrow
        invertedArrows={invertedArrows}
        icon={faAngleRight}
        disabled={disableArrows}
      />
    ),
    prevArrow: (
      <Arrow
        invertedArrows={invertedArrows}
        icon={faAngleLeft}
        disabled={disableArrows}
      />
    ),
  };

  return (
    <StyledSlider
      {...settings}
      options={{
        less: React.Children.count(children) >= itemsToShow,
        maxHeightSlick,
      }}
    >
      {children}
    </StyledSlider>
  );
};

Slider.defaultProps = {
  disableDots: false,
  disableArrows: false,
  invertedArrows: false,
};

export default Slider;
