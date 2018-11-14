import * as React from 'react';
import styled from 'styled-components';
import ReactSlider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/pro-light-svg-icons';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
  children: React.ReactNode;
}

const Icon = styled(FontAwesomeIcon)`
  width: 11px !important;
  height: 21px !important;
  color: white !important;
`;

function DaySlider({ children, ...rest }: Props) {
  return (
    <ReactSlider
      prevArrow={<Icon icon={faAngleLeft} />}
      nextArrow={<Icon icon={faAngleRight} />}
      {...rest}
    >
      {children}
    </ReactSlider>
  );
}

export default DaySlider;
