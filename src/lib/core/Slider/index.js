// @flow
import * as React from 'react';
import ReactSlider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/pro-light-svg-icons';
import styled from 'styled-components';

import './styles/slick-theme.css';
import './styles/slick.css';

type Props = {
  children: React.Node,
  itemsToShow: number,
  disableDots?: boolean,
  invertedArrows?: boolean,
  disableArrows?: boolean,
};

type ArrowProps = {
  className?: string,
  style?: Object,
  onClick?: Function,
  icon: React.Node,
  disabled: boolean,
  invertedArrows?: boolean,
};

const StyledSlider = styled(ReactSlider)`
  .slick-track {
    width: ${props => (props.options.less ? null : '100% !important')};
    display: ${props => (props.options.less ? null : 'flex !important')};
    justify-content: ${props =>
      props.options.less ? null : 'space-between !important'};
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
  ...rest
}: Props) => {
  const settings = {
    dots: disableDots ? false : true,
    slidesToShow: itemsToShow,
    slidesToScroll: itemsToShow,
    infinite: React.Children.count(children) >= itemsToShow,
    centerMode: true,
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
      options={{ less: React.Children.count(children) >= itemsToShow }}
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
