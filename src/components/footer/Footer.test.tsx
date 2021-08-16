import { cleanup, render, screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer ->', () => {
  const FOOTER_TEXT_DEFAULT = 'Test text goes here';
  const FOOTER_GRID_COUNT = 4;
  const FOOTER_COLUMN_TEST_ID = 'footer--grid-column-wrapper';
  const FOOTER_TEST_COLUMNS = () => {
    let columns = [];
    for (let i = 1; i <= FOOTER_GRID_COUNT; i++) {
      columns.push(<div key={i}>Column {i}</div>);
    }
    return columns;
  };
  beforeEach(() =>
    render(
      <Footer gridCount={FOOTER_GRID_COUNT} text={FOOTER_TEXT_DEFAULT}>
        {FOOTER_TEST_COLUMNS()}
      </Footer>
    )
  );

  afterEach(() => {
    cleanup();
  });

  test('renders on page', () => {
    const footer = document.querySelector('footer');
    expect(footer).toBeTruthy();
  });

  test('renders the correct number of columns passed to it', async () => {
    const columnWrapper = await screen.getByTestId(FOOTER_COLUMN_TEST_ID);
    expect(columnWrapper).toHaveClass(`grid-cols-${FOOTER_GRID_COUNT}`);
  });
});
