import { Card } from './Card';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup, render, screen } from '@testing-library/react';

describe('Button ->', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const TEST_CARD_ID = 'test-button-id';
  const CARD_TITLE_STRING = 'test card title';
  const CARD_TEXT_STRING = 'test card text';
  const CARD_IMAGE_STRING = '/src/assets/images/test';
  const CARD_IMAGE_ALT_STRING = 'Image alt here';

  beforeEach(() => {});

  afterEach(() => {
    cleanup();
  });

  test('renders when props are provided', async () => {
    render(
      <Card
        testid={TEST_CARD_ID}
        title={CARD_TITLE_STRING}
        image={CARD_IMAGE_STRING}
        imageAlt={CARD_IMAGE_ALT_STRING}
        text={CARD_TEXT_STRING}
      />
    );

    expect(screen.getByTestId(TEST_CARD_ID)).toBeTruthy();
  });
  test('renders when title prop is provided', async () => {
    render(
      <Card
        testid={TEST_CARD_ID}
        title={CARD_TITLE_STRING}
        image={CARD_IMAGE_STRING}
        text={CARD_TEXT_STRING}
      />
    );

    expect(screen.getByTestId(TEST_CARD_ID)).toHaveTextContent(
      CARD_TITLE_STRING
    );

    expect(screen.getByTestId(TEST_CARD_ID)).toHaveTextContent(
      CARD_TEXT_STRING
    );
  });
  test('renders an image and alt text', async () => {
    render(
      <Card
        testid={TEST_CARD_ID}
        title={CARD_TITLE_STRING}
        image={CARD_IMAGE_STRING}
        imageAlt={CARD_IMAGE_ALT_STRING}
      />
    );

    expect(
      screen.getByTestId(TEST_CARD_ID).querySelector('img')?.getAttribute('src')
    ).toEqual(CARD_IMAGE_STRING);

    expect(
      screen.getByTestId(TEST_CARD_ID).querySelector('img')?.getAttribute('alt')
    ).toEqual(CARD_IMAGE_ALT_STRING);
  });
});
