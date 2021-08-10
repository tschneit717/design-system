import { PropsWithChildren, FunctionComponent } from 'react';

export interface TabProps extends PropsWithChildren<any> {
  text: string;
}

export const Tab: FunctionComponent<TabProps> = (props: TabProps) => {
  return (
    <div data-component-type='Tab'>
      <p>Modal</p>
    </div>
  );
};
