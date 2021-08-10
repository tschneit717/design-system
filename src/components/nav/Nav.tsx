import { PropsWithChildren, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export interface NavProps extends PropsWithChildren<any> {
  navItems: Array<{
    link: string;
    text: string;
  }>;
  testid?: string;
}

export const Nav: FunctionComponent<NavProps> = (props: NavProps) => {
  return (
    <nav data-component-type='Nav' key={uuidv4()}>
      <ul>
        {props.navItems.map((item) => (
          <li key={uuidv4()}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
