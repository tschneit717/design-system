import { Carousel } from './Carousel';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Carousel ->', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const TEST_CAROUSEL_WRAPPER_ID = 'test-wrapper-id';
  const TEST_SINGLE_SLIDE = [
    {
      id: 'test-id-0',
      image: '/src/image/image1',
      title: 'Title 1',
      text: 'Content for slide 1',
      ctaLink: '/test/link/1',
      ctaText: 'Join Now 1',
    },
  ];
  const TEST_SLIDES = [
    {
      id: 'test-id-0',
      image: '/src/image/image1',
      title: 'Title 1',
      text: 'Content for slide 1',
      ctaLink: '/test/link/1',
      ctaText: 'Join Now 1',
    },
    {
      id: 'test-id-1',
      image: '/src/image/image2',
      title: 'Title 2',
      text: 'Content for slide 2',
      ctaLink: '/test/link/2',
      ctaText: 'Test CTA Text 2',
    },
    {
      id: 'test-id-2',
      image: '/src/image/image3',
      title: 'Title 3',
      text: 'Content for slide 3',
      ctaLink: '/test/link/3',
      ctaText: 'Join Now 3',
    },
    {
      id: 'test-id-3',
      image: '/src/image',
      title: 'Title 4',
      text: 'Content for slide 4',
      ctaLink: '/test/link/4',
      ctaText: 'Join Now 4',
    },
  ];

  beforeEach(() => {});

  afterEach(() => {
    cleanup();
  });

  test('renders when props are provided', async () => {
    const wrapper = shallow(
      <Carousel testid={TEST_CAROUSEL_WRAPPER_ID} slides={TEST_SLIDES} />
    );
    const actual = wrapper.find(`ul.carousel__slides`).children();

    expect(wrapper).toBeTruthy();

    expect(actual).toHaveLength(TEST_SLIDES.length);
  });

  test('Does not render buttons if there is only one slide', async () => {
    const wrapper = shallow(
      <Carousel testid={TEST_CAROUSEL_WRAPPER_ID} slides={TEST_SINGLE_SLIDE} />
    );
    const actual = wrapper.find(`.carousel__buttons`).exists();
    expect(actual).toBeFalsy();
  });

  test('Does not render pagination if there is only one slide', async () => {
    const wrapper = shallow(
      <Carousel testid={TEST_CAROUSEL_WRAPPER_ID} slides={TEST_SINGLE_SLIDE} />
    );
    const actual = wrapper.find(`.carousel__pagination`).exists();
    expect(actual).toBeFalsy();
  });

  test('Clicking the previous button will change the active slide to the previous slide', async () => {
    render(<Carousel testid={TEST_CAROUSEL_WRAPPER_ID} slides={TEST_SLIDES} />);

    let activeSlide = await screen.findByTestId('slide-0');
    expect(activeSlide).toHaveClass('--active');

    const previousButton = await screen.findByTestId('previous-button');
    userEvent.click(previousButton);
    expect(activeSlide).not.toHaveClass('--active');

    activeSlide = await screen.findByTestId(`slide-${TEST_SLIDES.length - 1}`);
    expect(activeSlide).toHaveClass('--active');
  });

  test('Clicking the next button will change the active slide to the next slide', async () => {
    render(<Carousel testid={TEST_CAROUSEL_WRAPPER_ID} slides={TEST_SLIDES} />);

    let activeSlide = await screen.findByTestId('slide-0');
    expect(activeSlide).toHaveClass('--active');

    const nextButton = await screen.findByTestId('next-button');
    userEvent.click(nextButton);
    expect(activeSlide).not.toHaveClass('--active');

    activeSlide = await screen.findByTestId(`slide-1`);
    expect(activeSlide).toHaveClass('--active');
  });
});
