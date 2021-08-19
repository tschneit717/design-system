import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';
const MODAL_TRIGGER_TEXT = 'Modal text';
const MODAL_TRIGGER_TITLE = 'Modal trigger title';
const MODAL_CONTENT_TITLE = 'Modal Title';
const MODAL_CONTENT = [
  <div key='modal-1'>
    <p>Modal Body</p>
  </div>,
];

let trigger: HTMLButtonElement;

describe('Modal ->', () => {
  beforeEach(() => {
    render(
      <Modal
        triggerTitle={MODAL_TRIGGER_TITLE}
        modalTitle={MODAL_CONTENT_TITLE}
        triggerText={MODAL_TRIGGER_TEXT}>
        {MODAL_CONTENT}
      </Modal>
    );
    trigger = screen.getByTitle(MODAL_TRIGGER_TITLE) as HTMLButtonElement;
  });

  test('Renders on the page when props are passed', async () => {
    expect(trigger).toBeTruthy();
  });

  test('Renders on the modal when the trigger is clicked', () => {
    userEvent.click(trigger);
    expect(screen.getByTitle(MODAL_CONTENT_TITLE)).toBeTruthy();
  });

  test('Closes the modal when the closing button is clicked', () => {
    userEvent.click(trigger);
    const closeButton = screen.getByTitle('Close Modal');
    let titleCheck = screen.queryByTitle(MODAL_CONTENT_TITLE);
    expect(titleCheck).not.toBeNull();
    userEvent.click(closeButton);
    titleCheck = screen.queryByTitle(MODAL_CONTENT_TITLE);
    expect(titleCheck).toBeNull();
  });

  test('Closes the modal when the background is clicked', () => {
    userEvent.click(trigger);
    const background = screen.getByTitle(MODAL_CONTENT_TITLE).children[0];
    let titleCheck = screen.queryByTitle(MODAL_CONTENT_TITLE);
    expect(titleCheck).not.toBeNull();
    userEvent.click(background);
    titleCheck = screen.queryByTitle(MODAL_CONTENT_TITLE);
    expect(titleCheck).toBeNull();
  });
});
