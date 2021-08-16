import { cleanup, render, screen } from '@testing-library/react';
import { Grid } from './Grid';

describe('Grid ->', () => {
  const GRID_TEST_COLUMN_COUNT = 2;
  const GRID_TEST_ROW_COUNT = 3;
  const GRID_TEST_ID = 'grid-test-id';
  const GRID_TEST_CHILDREN = [
    <div key='child-1'>Grid Item 1</div>,
    <div key='child-2'>Grid Item 2</div>,
    <div key='child-3'>Grid Item 3</div>,
    <div key='child-4'>Grid Item 4</div>,
    <div key='child-5'>Grid Item 5</div>,
    <div key='child-6'>Grid Item 6</div>,
    <div key='child-7'>Grid Item 7</div>,
  ];
  afterEach(() => {
    cleanup();
  });

  test('Renders on page with no props', () => {
    render(<Grid testId={GRID_TEST_ID}></Grid>);
    const gridComponent = screen.getByTestId(GRID_TEST_ID);
    expect(gridComponent).toBeTruthy();
    expect(gridComponent).not.toHaveClass('grid-cols-2');
    expect(gridComponent).not.toHaveClass('grid-rows-3');
  });

  test('Render on page with a column count of 2 when a count was passed to it', () => {
    render(
      <Grid testId={GRID_TEST_ID} columnCount={GRID_TEST_COLUMN_COUNT}></Grid>
    );
    const gridComponent = screen.getByTestId(GRID_TEST_ID);
    expect(gridComponent).toHaveClass('grid-cols-2');
    expect(gridComponent).not.toHaveClass('grid-rows-3');
  });

  test('Render on page with a row count of 2 when a count was passed to it', () => {
    render(<Grid testId={GRID_TEST_ID} rowCount={GRID_TEST_ROW_COUNT}></Grid>);
    const gridComponent = screen.getByTestId(GRID_TEST_ID);
    expect(gridComponent).not.toHaveClass('grid-cols-2');
    expect(gridComponent).toHaveClass('grid-rows-3');
  });

  test('Render on page with the children passed to it', () => {
    render(
      <Grid testId={GRID_TEST_ID} rowCount={GRID_TEST_ROW_COUNT}>
        {GRID_TEST_CHILDREN}
      </Grid>
    );
    const gridComponent = screen.getByTestId(GRID_TEST_ID);
    expect(gridComponent.children.length).toBe(7);
  });
});
