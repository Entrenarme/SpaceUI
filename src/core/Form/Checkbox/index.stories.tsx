import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './index';
import FormGroup from '../FormGroup';
import Toggle from './Toggle';

storiesOf('Form/Checkbox', module)
  .add('default', () => (
    <div
      style={{
        background:
          'linear-gradient(225deg, rgba(100,222,233,1) 0%, rgba(81,81,229,1) 100%)',
      }}
    >
      <Checkbox
        label="Checkbox label prop"
        onClick={e => console.log('event, ', e.currentTarget.checked)}
      />
    </div>
  ))
  .add('default with custom styles', () => (
    <div
      style={{
        background:
          'linear-gradient(225deg, rgba(100,222,233,1) 0%, rgba(81,81,229,1) 100%)',
      }}
    >
      <Checkbox
        style={{ color: 'red' }}
        label="Checkbox label prop"
        onClick={e => console.log('event, ', e.currentTarget.checked)}
      />
    </div>
  ))
  .add('with form group', () => (
    <div
      style={{
        background:
          'linear-gradient(225deg, rgba(100,222,233,1) 0%, rgba(81,81,229,1) 100%)',
      }}
    >
      <FormGroup legend="Checkboxes group">
        <Checkbox label="Checkbox label prop1" />
        <Checkbox label="Checkbox label prop2" />
      </FormGroup>
    </div>
  ))
  .add('toggle', () => (
    <div
      style={{
        background: 'white',
      }}
    >
      <Toggle onClick={e => console.log('event, ', e.currentTarget.checked)} />
    </div>
  ))
  .add('toggle form group', () => (
    <div
      style={{
        background: 'white',
      }}
    >
      <FormGroup legend="Toggles!!">
        <Toggle
          name="toggle 1"
          onClick={e =>
            console.log(
              'event, ',
              e.currentTarget.name,
              e.currentTarget.checked,
            )
          }
        />
        <Toggle
          name="toggle 2"
          onClick={e =>
            console.log(
              'event, ',
              e.currentTarget.name,
              e.currentTarget.checked,
            )
          }
        />
        <Toggle
          name="toggle 3"
          onClick={e =>
            console.log(
              'event, ',
              e.currentTarget.name,
              e.currentTarget.checked,
            )
          }
        />
      </FormGroup>
    </div>
  ))
  .add('toggle with custom styles', () => (
    <div
      style={{
        background: 'white',
      }}
    >
      <Toggle
        style={{ width: '300px' }}
        onClick={e => console.log('event, ', e.currentTarget.checked)}
      />
    </div>
  ));
