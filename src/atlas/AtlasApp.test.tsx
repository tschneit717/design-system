import React from 'react';
import { render } from '@testing-library/react';
import { AtlasApp } from './AtlasApp';
describe('AtlasApp ->', () => {
  test('renders basic app on page', () => {
    render(<AtlasApp />);
  });
});
