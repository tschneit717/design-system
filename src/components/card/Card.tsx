import { PropsWithChildren, FunctionComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface CardProps extends PropsWithChildren<any> {
  text?: string;
  title: string;
  image: string;
  imageAlt?: string;
  testid?: string;
}

export const Card: FunctionComponent<CardProps> = (props: CardProps) => {
  return (
    <div
      data-component-type='Card'
      key={uuidv4()}
      data-testid={props.testid}
      className='card'>
      <img className='card__image' src={props.image} alt={props.imageAlt} />
      <span className='card__title'>{props.title}</span>
      <p className='card__text'>{props.text}</p>
    </div>
  );
};
