import * as React from 'react';
import styled from 'styled-components';

import Button from './index';

interface Props {
  children: Array<React.ReactElement<typeof Button>>;
}

const ButtonsContainer = styled.div`
  display: flex;
  > button {
    border-radius: 0;

    &:first-child {
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
    }

    &:last-child {
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
    }
  }
`;

function ButtonGroup({ children }: Props) {
  return <ButtonsContainer>{children}</ButtonsContainer>;
}

export default ButtonGroup;
