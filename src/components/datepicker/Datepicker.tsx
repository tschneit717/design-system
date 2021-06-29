import { PropsWithChildren, FunctionComponent } from 'react';

export interface DatepickerProps extends PropsWithChildren<any> {
  text: string;
}

export const DatepickerEditConfig = {
  emptyLabel: 'Datepicker Component',
  isEmpty: function (props: DatepickerProps): boolean {
    return !props || !props.text;
  },
};

export const Datepicker: FunctionComponent<DatepickerProps> = (
  props: DatepickerProps
) => {
  return (
    <div>
      <p>Datepicker</p>
    </div>
  );
};
