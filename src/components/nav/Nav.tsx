import { PropsWithChildren, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
export interface NavProps extends PropsWithChildren<any> {
  navItems: Array<{
    link: string;
    text: string;
  }>;
  testid?: string;
}

export const Nav: FunctionComponent<NavProps> = (props: NavProps) => {
  return (
    <nav>
      <ul>
        {props.navItems.map((item) => (
          <li key={item.link}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
