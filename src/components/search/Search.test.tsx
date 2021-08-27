import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Search } from './Search';
import userEvent from '@testing-library/user-event';

const SEARCH_DATASOURCE = 'https://api.sampleapis.com/futurama/episodes';

describe('Search ->', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Search dataSource={SEARCH_DATASOURCE}></Search>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('renders on page', () => {
    const inputBox = screen.getByRole('textbox');
    expect(inputBox).toBeTruthy();
  });

  test('makes an api call and renders a list', async () => {
    const inputBox = screen.getByRole('textbox');
    await userEvent.type(inputBox, 'Game');

    expect(await screen.findByText('Game of Tones')).toBeInTheDocument();
  });
});
