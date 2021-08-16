import { FunctionComponent, PropsWithChildren } from 'react';

interface GridProps extends PropsWithChildren<any> {
  columnCount?: number;
  rowCount?: number;
  testId?: string;
}
export const Grid: FunctionComponent<GridProps> = (props: GridProps) => {
  return (
    <div
      data-testid={props.testId}
      data-component-type='Grid'
      className={`grid${
        props.columnCount ? ` grid-cols-${props.columnCount}` : ''
      }${props.rowCount ? ` grid-rows-${props.rowCount}` : ''}`}>
      {props.children}
    </div>
  );
};
