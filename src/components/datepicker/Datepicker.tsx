import { PropsWithChildren, FunctionComponent } from 'react';

export interface DatepickerProps extends PropsWithChildren<any> {
  text: string;
}

export const Datepicker: FunctionComponent<DatepickerProps> = (
  props: DatepickerProps
) => {
  return (
    <div>
      <p>Datepicker</p>
    </div>
  );
};
