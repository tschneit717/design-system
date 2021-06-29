import { PropsWithChildren, FunctionComponent } from 'react';

export interface HeaderProps extends PropsWithChildren<any> {
  text: string;
}

export const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  return (
    <header>
      <p>Header</p>
    </header>
  );
};
