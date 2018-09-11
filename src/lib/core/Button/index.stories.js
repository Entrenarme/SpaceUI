// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { faPlus, faWarehouse } from '@fortawesome/pro-light-svg-icons';

import Button from './index';

const actions = {
  onClick: action('onClick'),
};

storiesOf('Button/Normal', module).add('With text', () => (
  <Button label="Test text" onClick={() => console.log('hola')} {...actions} />
));

storiesOf('Button/Normal', module).add('With icon', () => (
  <Button icon={faPlus} onClick={() => console.log('hola')} {...actions} />
));

storiesOf('Button/Normal', module).add('With icon and text', () => (
  <Button
    icon={faPlus}
    label="Test text"
    onClick={() => console.log('hola')}
    {...actions}
  />
));

storiesOf('Button/Solid', module).add('With text', () => (
  <Button
    label="Test text"
    bgColor="#4CAF50"
    onClick={() => console.log('hola')}
    {...actions}
  />
));

storiesOf('Button/Solid', module).add('With icon', () => (
  <Button
    icon={faPlus}
    bgColor="#4CAF50"
    onClick={() => console.log('hola')}
    {...actions}
  />
));

storiesOf('Button/Solid', module).add('With icon and text', () => (
  <Button
    icon={faPlus}
    label="Test text"
    bgColor="#4CAF50"
    onClick={() => console.log('hola')}
    {...actions}
  />
));

storiesOf('Button/Outlined', module).add('With text', () => (
  <Button
    outLined
    label="Test text"
    textColor="tomato"
    onClick={() => console.log('hola')}
    {...actions}
  />
));

storiesOf('Button/Outlined', module).add('With icon', () => (
  <Button
    outLined
    icon={faPlus}
    textColor="tomato"
    onClick={() => console.log('hola')}
    {...actions}
  />
));

storiesOf('Button/Outlined', module).add('With icon and text', () => (
  <Button
    outLined
    icon={faPlus}
    label="Test text"
    textColor="tomato"
    onClick={() => console.log('hola')}
    {...actions}
  />
));
