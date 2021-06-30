import { useState } from 'react';
import { PropsWithChildren, FunctionComponent } from 'react';
import { BiCircle, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { FaCircle } from 'react-icons/fa';
export interface CarouselProps extends PropsWithChildren<any> {
  testid?: string;
  slides: Array<{
    id: string;
    image: string;
    title: string;
    text: string;
    ctaLink: string;
    ctaText: string;
  }>;
}

export const Carousel: FunctionComponent<CarouselProps> = (
  props: CarouselProps
) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderButtons = () => (
    <div className='carousel__buttons'>
      <button
        data-testid='previous-button'
        onClick={() =>
          setActiveSlide(
            activeSlide === 0 ? props.slides.length - 1 : activeSlide - 1
          )
        }
        aria-label='previous'>
        Previous
        <BiChevronLeft />
      </button>
      <button
        data-testid='next-button'
        onClick={() =>
          setActiveSlide(
            activeSlide === props.slides.length - 1 ? 0 : activeSlide + 1
          )
        }
        aria-label='next'>
        Next
        <BiChevronRight />
      </button>
    </div>
  );

  const renderPagination = (length: number) => {
    let content = [];
    for (let i = 0; i < length; i++) {
      content.push(
        <li key={i}>
          <button
            data-testid={`pagination-${i}`}
            onClick={() => setActiveSlide(i)}>
            {activeSlide === i ? <FaCircle /> : <BiCircle />}
          </button>
        </li>
      );
    }
    return (
      <ul className='carousel__pagination'>{content.map((item) => item)}</ul>
    );
  };
  return (
    <div data-testid={props.testid}>
      <ul className='carousel__slides' data-testid='carousel-wrapper'>
        {props.slides.map((slide, index) => (
          <li
            data-testid={`slide-${index}`}
            className={`carousel__slide ${
              activeSlide === index ? '--active' : ''
            }`}
            id={slide.id}
            key={slide.id}>
            <img alt={slide.title} src={slide.image} />
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
            <a href={slide.ctaLink}>{slide.ctaText}</a>
          </li>
        ))}
      </ul>
      {props.slides.length > 1 ? renderButtons() : ''}
      {props.slides.length > 1 ? renderPagination(props.slides.length) : ''}
    </div>
  );
};
