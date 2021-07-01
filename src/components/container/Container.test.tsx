import { Container } from './Container';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup, render } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';

describe('Codefield ->', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const TEST_CONTAINER_ID = 'test-container-id';
  const TEST_CHILDREN_SINGLE = <p>Test Paragraph</p>;
  const TEST_CHILDREN_MULTIPLE = [
    <p key={uuidv4()}>Paragraph one</p>,
    <p key={uuidv4()}>Paragraph two</p>,
    <p key={uuidv4()}>Paragraph three</p>,
  ];

  beforeEach(() => {});

  afterEach(() => {});

  test('renders when a single child is provided', () => {
    render(
      <Container testid={TEST_CONTAINER_ID}>{TEST_CHILDREN_SINGLE}</Container>
    );
    const containerWrapper = document.querySelector('.container');
    expect(containerWrapper).toBeTruthy();
    expect(containerWrapper?.children.length).toEqual(1);
    cleanup();
  });
  test('renders multiple child elements', () => {
    render(
      <Container testid={TEST_CONTAINER_ID}>{TEST_CHILDREN_MULTIPLE}</Container>
    );
    const containerWrapper = document.querySelector('.container');
    expect(containerWrapper).toBeTruthy();
    expect(containerWrapper?.children.length).toEqual(
      TEST_CHILDREN_MULTIPLE.length
    );
    cleanup();
  });
});
