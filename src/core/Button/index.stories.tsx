import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Button from './index';
import ButtonGroupSample from './ButtonGroup.sample';

const actions = {
  onClick: action('onClick'),
};

storiesOf('Button/Normal', module)
  .add('With text', () => (
    <Button
      label="Test text"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ))
  .add('With icon', () => (
    <Button
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      onClick={() => console.log('hola')}
      {...actions}
    />
  ))
  .add('With icon and text', () => (
    <Button
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      label="Test text"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ))
  .add('Disabled', () => (
    <Button
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      label="Test text"
      onClick={() => console.log('hola')}
      disabled
      {...actions}
    />
  ))
  .add('Loading state', () => (
    <Button
      label="Test text"
      onClick={() => console.log('hola')}
      loading
      {...actions}
    />
  ));

storiesOf('Button/Solid', module)
  .add('With text', () => (
    <Button
      label="Test text"
      bgColor="#4CAF50"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ))
  .add('With icon', () => (
    <Button
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      bgColor="#4CAF50"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ))
  .add('With icon and text', () => (
    <Button
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      label="Test text"
      bgColor="#4CAF50"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ))
  .add('Disabled', () => (
    <Button
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      label="Test text"
      bgColor="#4CAF50"
      onClick={() => console.log('hola')}
      disabled
      {...actions}
    />
  ))
  .add('Loading state', () => (
    <Button
      label="Test text"
      bgColor="#4CAF50"
      onClick={() => console.log('hola')}
      loading
      {...actions}
    />
  ));

storiesOf('Button/Outlined', module)
  .add('With text', () => (
    <Button
      outLined
      label="Test text"
      textColor="tomato"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ))
  .add('With icon', () => (
    <Button
      outLined
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      textColor="tomato"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ))
  .add('With icon and text', () => (
    <Button
      outLined
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      label="Test text"
      textColor="tomato"
      onClick={() => console.log('hola')}
      {...actions}
    />
  ))
  .add('Disabled', () => (
    <Button
      outLined
      icon={<FontAwesomeIcon icon={faWhatsapp} size="lg" />}
      label="Test text"
      textColor="tomato"
      onClick={() => console.log('hola')}
      disabled
      {...actions}
    />
  ))
  .add('Loading state', () => (
    <Button
      outLined
      label="Test text"
      textColor="tomato"
      onClick={() => console.log('hola')}
      loading
      {...actions}
    />
  ));

storiesOf('Button/Toggle', module).add('Toggle', () => <ButtonGroupSample />);
