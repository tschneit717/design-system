import { PropsWithChildren, FunctionComponent } from 'react';

export interface PageProps extends PropsWithChildren<any> {
  text: string;
}

export const Page: FunctionComponent<PageProps> = (props: PageProps) => {
  return (
    <div data-component-type='Page'>
      <p>Page</p>
    </div>
  );
};
