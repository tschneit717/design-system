import { PropsWithChildren, FunctionComponent } from 'react';

export interface ContainerProps extends PropsWithChildren<any> {
  text: string;
}

export const Container: FunctionComponent<ContainerProps> = (
  props: ContainerProps
) => {
  return (
    <div>
      <p>Container</p>
    </div>
  );
};
