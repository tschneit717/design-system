import { PropsWithChildren, FunctionComponent } from 'react';

export interface PageProps extends PropsWithChildren<any> {
  text: string;
}

export const Page: FunctionComponent<PageProps> = (props: PageProps) => {
  return (
    <div>
      <p>Page</p>
    </div>
  );
};
