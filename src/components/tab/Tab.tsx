import { PropsWithChildren, FunctionComponent } from 'react';

export interface TabProps extends PropsWithChildren<any> {
  text: string;
}

export const Tab: FunctionComponent<TabProps> = (props: TabProps) => {
  return (
    <div>
      <p>Modal</p>
    </div>
  );
};
