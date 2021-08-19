import { Headline } from './Headline';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';

describe('Headline ->', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const HEADLINE_TITLE_TEXT = 'Test title text';
  const HEADLINE_BODY_TEXT = 'Test body text';
  const HEADLINE_ALIGNMENT = 'center';
  const HEADLINE_TITLE_TAG = 'h2';
  const HEADLINE_FONT_SIZE = '2xl';

  afterEach(() => {
    cleanup();
  });

  test('renders when props are provided', () => {
    const wrapper = shallow(
      <Headline
        titleText={HEADLINE_TITLE_TEXT}
        text={HEADLINE_BODY_TEXT}
        alignment={HEADLINE_ALIGNMENT}
        titleTag={HEADLINE_TITLE_TAG}
        fontSize={HEADLINE_FONT_SIZE}
      />
    );
    const actual = wrapper.find(`.text-${HEADLINE_ALIGNMENT}`).exists();
    expect(actual).toBeTruthy();
  });
});
