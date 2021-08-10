import { PropsWithChildren, FunctionComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
export interface ContainerProps extends PropsWithChildren<any> {
  children: JSX.Element[] | JSX.Element;
  testid?: string;
}

export const Container: FunctionComponent<ContainerProps> = (
  props: ContainerProps
) => {
  return (
    <div
      data-component-type='Container'
      key={uuidv4()}
      data-testid={props.testid}
      className='container'>
      {props.children}
    </div>
  );
};
