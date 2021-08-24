import { Nav } from './Nav';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

let wrapper: HTMLElement;

describe('Headline ->', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const NAV_TEST_ITEMS = [
    {
      link: '/',
      text: 'Home',
    },
    {
      link: '/about',
      text: 'About',
    },
    {
      link: '/profile',
      text: 'Profile',
    },
    {
      link: '/products',
      text: 'Products',
    },
  ];

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Nav navItems={NAV_TEST_ITEMS}></Nav>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('renders when props are provided', () => {
    const actual = screen.getByRole(`list`);
    expect(actual).toBeTruthy();
  });

  test('renders out the list of nav items', () => {
    const actual = screen.getAllByRole(`listitem`);

    expect(actual).toHaveLength(NAV_TEST_ITEMS.length);
  });

  test('renders out list of nav items, and links clicked take the user to the page', () => {
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(NAV_TEST_ITEMS[1].text), leftClick);

    expect(window.location.pathname).toEqual(NAV_TEST_ITEMS[1].link);
  });
});
