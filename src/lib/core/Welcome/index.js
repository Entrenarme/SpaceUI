// @flow
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 30px;
  background-image: linear-gradient(to right, red, blue);
`;

type Props = {};

const WelcomeText = (props: Props) => {
  return (
    <Container>
      <p>testing StoryBook aaa</p>
    </Container>
  );
};

export default WelcomeText;
