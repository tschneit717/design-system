import { PropsWithChildren, FunctionComponent } from 'react';

export interface FooterProps extends PropsWithChildren<any> {
  text: string;
}

export const Footer: FunctionComponent<FooterProps> = (props: FooterProps) => {
  return (
    <div data-component-type='Footer'>
      <p>Footer</p>
    </div>
  );
};
