import * as React from 'react';
import { storiesOf } from '@storybook/react';

import FormGroup from '../FormGroup';
import RadioButton from './index';

storiesOf('Form/RadioButton', module)
  .add('standalone', () => <RadioButton label="Radio button label" />)
  .add('Group with FormGroup', () => (
    <FormGroup legend="radio button group">
      <RadioButton label="label 1" name="radio-group" />
      <RadioButton label="label 2" name="radio-group" />
      <RadioButton label="label 3" name="radio-group" />
      <RadioButton label="label 4" name="radio-group" />
    </FormGroup>
  ));
