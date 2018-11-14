import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Slider from './index';

const MainCard = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
`;

const moreThan3 = [1, 2, 3, 4, 5];

const lessThan3 = [1, 2, 3, 4, 5, 6];

const ElementDecoration = (storyFn: any) => (
  <div style={{ height: '100vh' }}>{storyFn()}</div>
);

storiesOf('Slider', module)
  .addDecorator(ElementDecoration)
  .add('with more than 3 elements', () => (
    <Slider itemsToShow={3}>
      {moreThan3.map(element => (
        <div key={element}>
          <MainCard>
            Number: {element}
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum magna eu velit semper hendrerit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec fermentum magna eu velit
            semper hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec fermentum magna eu velit semper hendrerit.
          </MainCard>
        </div>
      ))}
    </Slider>
  ))
  .add('with disabled arrows', () => (
    <Slider itemsToShow={1} disableArrows>
      {lessThan3.map(element => (
        <div key={element}>
          <MainCard>
            Number: {element}
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum magna eu velit semper hendrerit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec fermentum magna eu velit
            semper hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec fermentum magna eu velit semper hendrerit.
          </MainCard>
        </div>
      ))}
    </Slider>
  ))
  .add('starting at slide 2', () => (
    <Slider itemsToShow={1} disableArrows initialSlide={1}>
      {lessThan3.map(element => (
        <div key={element}>
          <MainCard>
            Number: {element}
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum magna eu velit semper hendrerit.
          </MainCard>
        </div>
      ))}
    </Slider>
  ));
