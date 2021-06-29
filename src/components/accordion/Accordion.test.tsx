import { Accordion } from './Accordion';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Accordion ->', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const ACCORDION_TITLE = 'Title';
  const ACCORDION_BODY = 'Title';
  const TEST_ID = 'accordion-test-id';

  afterEach(() => {
    cleanup();
  });

  test('renders when title prop is provided', async () => {
    render(
      <Accordion
        testid={TEST_ID}
        title={ACCORDION_TITLE}
        body={ACCORDION_BODY}
      />
    );
    expect(screen.getByTestId(TEST_ID)).toBeTruthy();
  });

  test('toggles the accordion item to open on click and close on click', async () => {
    render(
      <Accordion
        testid={TEST_ID}
        title={ACCORDION_TITLE}
        body={ACCORDION_BODY}
      />
    );

    const leftClick = { button: 0 };
    const accordionItem = screen.getByTitle(ACCORDION_TITLE);

    userEvent.click(accordionItem, leftClick);
    expect(accordionItem).toHaveClass('open');
    userEvent.click(accordionItem, leftClick);
    expect(accordionItem).not.toHaveClass('open');
  });
});
