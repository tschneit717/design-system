import { cleanup, render, screen } from '@testing-library/react';
import { Page } from './Page';

describe('Page ->', () => {
  const PAGE_TEST_ID = 'test-page-id';
  const PAGE_TEST_TITLE = 'Test Page';
  const PAGE_TEST_CHILDREN = [
    <p key='1'>Test Paragraph</p>,
    <p key='2'>Test Paragraph</p>,
    <p key='3'>Test Paragraph</p>,
  ];

  beforeEach(() => {
    render(
      <Page testId={PAGE_TEST_ID} title={PAGE_TEST_TITLE}>
        {PAGE_TEST_CHILDREN}
      </Page>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('Renders on the page when props are passed to them', () => {
    const pageElement = screen.getByTestId(PAGE_TEST_ID);
    expect(pageElement).toBeTruthy();
  });

  test('Expect all children props to render to the page', () => {
    const childElements = screen.getByTestId(PAGE_TEST_ID).children[1];

    expect(childElements.children.length).toBe(PAGE_TEST_CHILDREN.length);
  });
});
