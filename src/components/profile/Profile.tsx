import { PropsWithChildren, FunctionComponent } from 'react';

export interface ProfileProps extends PropsWithChildren<any> {
  text: string;
}

export const Profile: FunctionComponent<ProfileProps> = (
  props: ProfileProps
) => {
  return (
    <div data-component-type='Profile'>
      <p>Profile</p>
    </div>
  );
};
