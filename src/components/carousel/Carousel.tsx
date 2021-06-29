import { PropsWithChildren, FunctionComponent } from 'react';

export interface CarouselProps extends PropsWithChildren<any> {
  text: string;
}

export const CarouselEditConfig = {
  emptyLabel: 'Carousel Component',
  isEmpty: function (props: CarouselProps): boolean {
    return !props || !props.text;
  },
};

export const Carousel: FunctionComponent<CarouselProps> = (
  props: CarouselProps
) => {
  return (
    <div>
      <p>Carousel</p>
    </div>
  );
};
