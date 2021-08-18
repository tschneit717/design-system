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
    <div
      data-component-type='Carousel'
      className='carousel__buttons absolute flex justify-between h-full w-full top-0 left-0 items-center'>
      <button
        className='flex items-center text-4xl'
        data-testid='previous-button'
        onClick={() =>
          setActiveSlide(
            activeSlide === 0 ? props.slides.length - 1 : activeSlide - 1
          )
        }
        aria-label='previous'>
        <BiChevronLeft />
      </button>
      <button
        className='flex items-center text-4xl'
        data-testid='next-button'
        onClick={() =>
          setActiveSlide(
            activeSlide === props.slides.length - 1 ? 0 : activeSlide + 1
          )
        }
        aria-label='next'>
        <BiChevronRight />
      </button>
    </div>
  );

  const renderPagination = (length: number) => {
    let content = [];
    for (let i = 0; i < length; i++) {
      content.push(
        <li key={i} className={i < length - 1 ? 'mr-3' : ''}>
          <button
            data-testid={`pagination-${i}`}
            onClick={() => setActiveSlide(i)}>
            {activeSlide === i ? <FaCircle /> : <BiCircle />}
          </button>
        </li>
      );
    }
    return (
      <ul className='carousel__pagination flex justify-center'>
        {content.map((item) => item)}
      </ul>
    );
  };
  return (
    <div className='relative' data-testid={props.testid}>
      <ul className='carousel__slides relative' data-testid='carousel-wrapper'>
        {props.slides.map((slide, index) => (
          <li
            data-testid={`slide-${index}`}
            className={`carousel__slide relative ${
              activeSlide === index ? '--active block' : 'hidden'
            }`}
            id={slide.id}
            key={slide.id}>
            <img
              alt={slide.title}
              className='object-cover w-full h-full'
              src={slide.image}
            />
            <div className='absolute h-full w-full pl-40 pt-8 left-0 top-0'>
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <a href={slide.ctaLink}>{slide.ctaText}</a>
            </div>
          </li>
        ))}
      </ul>
      {props.slides.length > 1 ? renderButtons() : ''}
      {props.slides.length > 1 ? renderPagination(props.slides.length) : ''}
    </div>
  );
};
