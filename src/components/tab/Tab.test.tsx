import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tab } from './Tab';

const TAB_TEST_OPTIONS = [
  {
    title: 'Tab 1',
    content: <p>Paragraph One here</p>,
  },
  {
    title: 'Tab 2',
    content: <p>Paragraph for tab 2</p>,
  },
  {
    title: 'Tab 3',
    content: (
      <>
        <p>Test paragraph 1</p>
        <p>Test paragraph 2</p>
      </>
    ),
  },
];

describe('Tab ->', () => {
  beforeEach(() => {
    render(<Tab tabOptions={TAB_TEST_OPTIONS}></Tab>);
  });

  afterEach(() => {
    cleanup();
  });

  test('Renders with props passed to it', () => {
    expect(screen.getAllByRole('tab')).toHaveLength(3);
  });

  test('Changes the tab content and classes when a new tab is clicked', () => {
    const buttonList = screen.getByRole('tablist').children;
    userEvent.click(buttonList[1]);
    const tabContent = screen.getByRole('tabpanel');
    const targetContent = TAB_TEST_OPTIONS[1].content.props.children;
    expect(tabContent).toHaveTextContent(targetContent);
  });
});
