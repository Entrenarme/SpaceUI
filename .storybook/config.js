import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
require('typeface-montserrat');
require('typeface-nunito');

addDecorator(withInfo());

const req = require.context('../src/core', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
