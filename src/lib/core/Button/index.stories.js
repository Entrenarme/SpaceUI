// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { faPlus, faWarehouse } from '@fortawesome/pro-light-svg-icons';

import Button from './index';

const actions = {
  onClick: action('onClick'),
};

storiesOf('Button', module).add('With text', () => (
  <Button label="Test text" onClick={() => console.log('hola')} {...actions} />
));

storiesOf('Button', module).add('With icon', () => (
  <Button icon={faPlus} onClick={() => console.log('hola')} {...actions} />
));

storiesOf('Button', module).add('With icon and text', () => (
  <Button
    icon={faPlus}
    label="Test text"
    onClick={() => console.log('hola')}
    {...actions}
  />
));

storiesOf('Button', module).add('With solid background color', () => (
  <Button
    icon={faWarehouse}
    label="Test text"
    bgColor="#4CAF50"
    onClick={() => console.log('hola')}
    {...actions}
  />
));

storiesOf('Button', module).add('Outlined', () => (
  <Button
    outLined
    icon={faWarehouse}
    label="Test text"
    textColor="tomato"
    onClick={() => console.log('hola')}
    {...actions}
  />
));
