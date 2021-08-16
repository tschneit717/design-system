import { PropsWithChildren, FunctionComponent } from 'react';

export interface FooterProps extends PropsWithChildren<any> {
  text: string;
  gridCount: number;
  children: any;
}

export const Footer: FunctionComponent<FooterProps> = (props: FooterProps) => {
  return (
    <footer data-component-type='Footer' className=''>
      <div
        data-testid='footer--grid-column-wrapper'
        className={`grid grid-cols-${props.gridCount}`}>
        {props.children}
      </div>
    </footer>
  );
};
