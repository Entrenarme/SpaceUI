import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Select from './index';

const CustomSelect = styled(Select)`
  .select-input {
    font-size: 30px;
  }

  .select-options-container {
    padding: 40px;
  }
`;

const options = [
  { text: 'Opcion 1', value: 'op1' },
  { text: 'Opcion 2', value: 'op2' },
  { text: 'Opcion 3', value: 'op3', selected: true },
  { text: 'Opcion 4', value: 'op4' },
];

storiesOf('Form/Select', module).add('Normal', () => (
  <div
    style={{
      backgroundColor: 'rgba(81, 81, 229, 1)',
      height: 300,
      padding: 20,
    }}
  >
    <Select
      onChange={(selectedOption: Object) => console.log(selectedOption)}
      options={options}
      width={200}
      height={50}
    />
  </div>
));

storiesOf('Form/Select', module).add('With custom styles', () => (
  <div
    style={{
      backgroundColor: 'rgba(81, 81, 229, 1)',
      height: 300,
      padding: 20,
    }}
  >
    <CustomSelect
      onChange={() => console.log('jajaja')}
      options={options}
      width={200}
      height={50}
    />
  </div>
));

storiesOf('Form/Select', module).add('With bottom anchor', () => (
  <div
    style={{
      backgroundColor: 'rgba(81, 81, 229, 1)',
      height: 200,
      padding: 20,
      paddingTop: 200,
    }}
  >
    <Select
      onChange={() => console.log('jajaja')}
      options={options}
      anchor="bottom"
      width={150}
      height={35}
    />
  </div>
));
