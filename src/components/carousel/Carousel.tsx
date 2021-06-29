import { PropsWithChildren, FunctionComponent } from 'react';

export interface CarouselProps extends PropsWithChildren<any> {
  text: string;
}

export const Carousel: FunctionComponent<CarouselProps> = (
  props: CarouselProps
) => {
  return (
    <div>
      <p>Carousel</p>
    </div>
  );
};
