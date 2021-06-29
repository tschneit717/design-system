import { PropsWithChildren, FunctionComponent } from 'react';

export interface ProfileProps extends PropsWithChildren<any> {
  text: string;
}

export const Profile: FunctionComponent<ProfileProps> = (
  props: ProfileProps
) => {
  return (
    <div>
      <p>Profile</p>
    </div>
  );
};
