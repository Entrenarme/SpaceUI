// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { faPlus, faWarehouse } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faPaypal } from '@fortawesome/free-brands-svg-icons';

import Button from './index';

const actions = {
  onClick: action('onClick'),
};

const ElementDecoration = storyFn => (
  <div style={{ backgroundColor: '#F1F1F1', height: '100vh', padding: '20px' }}>
    {storyFn()}
  </div>
);

storiesOf('Button/Normal', module)
  .addDecorator(ElementDecoration)
  .add('With text', () => (
    <Button
      label="Test text"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ));

storiesOf('Button/Normal', module)
  .addDecorator(ElementDecoration)
  .add('With icon', () => (
    <Button
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      onClick={() => console.log('hola')}
      {...actions}
    />
  ));

storiesOf('Button/Normal', module)
  .addDecorator(ElementDecoration)
  .add('With icon and text', () => (
    <Button
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      label="Test text"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ));

storiesOf('Button/Solid', module)
  .addDecorator(ElementDecoration)
  .add('With text', () => (
    <Button
      label="Test text"
      bgColor="#4CAF50"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ));

storiesOf('Button/Solid', module)
  .addDecorator(ElementDecoration)
  .add('With icon', () => (
    <Button
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      bgColor="#4CAF50"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ));

storiesOf('Button/Solid', module)
  .addDecorator(ElementDecoration)
  .add('With icon and text', () => (
    <Button
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      label="Test text"
      bgColor="#4CAF50"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ));

storiesOf('Button/Solid', module)
  .addDecorator(ElementDecoration)
  .add('Payment example', () => (
    <Button
      icon={<FontAwesomeIcon icon={faPaypal} size="lg" />}
      textColor="#666666"
      label="PAYMENT EXAMPLE"
      bgColor="#fff"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ));

storiesOf('Button/Outlined', module)
  .addDecorator(ElementDecoration)
  .add('With text', () => (
    <Button
      outLined
      label="Test text"
      textColor="tomato"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ));

storiesOf('Button/Outlined', module)
  .addDecorator(ElementDecoration)
  .add('With icon', () => (
    <Button
      outLined
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      textColor="tomato"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ));

storiesOf('Button/Outlined', module)
  .addDecorator(ElementDecoration)
  .add('With icon and text', () => (
    <Button
      outLined
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      label="Test text"
      textColor="tomato"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ));
