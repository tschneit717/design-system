import { PropsWithChildren, FunctionComponent } from 'react';
import { Container } from '../container/Container';

export interface PageProps extends PropsWithChildren<any> {
  title: string;
  testId?: string;
}

export const Page: FunctionComponent<PageProps> = ({
  title,
  children,
  testId,
}: PageProps) => {
  return (
    <div data-testid={testId} data-component-type='Page'>
      <Container>
        <h1>{title}</h1>
      </Container>
      <Container>{children}</Container>
    </div>
  );
};
