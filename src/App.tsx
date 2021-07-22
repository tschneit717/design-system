import { Container } from './components/container/Container';
import './assets/styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Carousel } from './components/carousel/Carousel';
import { Codefield } from './components/codefield/Codefield';
import { Accordion } from './components/accordion/Accordion';
import { Button } from './components/button/Button';
import { Card } from './components/card/Card';
import { Nav } from './components/nav/Nav';
import { Text } from './components/text/Text';
import { Headline } from './components/headline/Headline';
import { Datepicker } from './components/datepicker/Datepicker';

const TEST_CHILDREN_MULTIPLE = [
  <p key={uuidv4()}>Paragraph one</p>,
  <p key={uuidv4()}>Paragraph two</p>,
  <p key={uuidv4()}>Paragraph three</p>,
];
const TEST_SLIDES = [
  {
    id: 'test-id-0',
    image: '/src/image/image1',
    title: 'Title 1',
    text: 'Content for slide 1',
    ctaLink: '/test/link/1',
    ctaText: 'Join Now 1',
  },
  {
    id: 'test-id-1',
    image: '/src/image/image2',
    title: 'Title 2',
    text: 'Content for slide 2',
    ctaLink: '/test/link/2',
    ctaText: 'Test CTA Text 2',
  },
  {
    id: 'test-id-2',
    image: '/src/image/image3',
    title: 'Title 3',
    text: 'Content for slide 3',
    ctaLink: '/test/link/3',
    ctaText: 'Join Now 3',
  },
  {
    id: 'test-id-3',
    image: '/src/image',
    title: 'Title 4',
    text: 'Content for slide 4',
    ctaLink: '/test/link/4',
    ctaText: 'Join Now 4',
  },
];

const NAV_TEST_ITEMS = [
  {
    link: '/',
    text: 'Home',
  },
  {
    link: '/about',
    text: 'About',
  },
  {
    link: '/profile',
    text: 'Profile',
  },
  {
    link: '/products',
    text: 'Products',
  },
];

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Datepicker></Datepicker>
        <Accordion testid='String' title='Title' body='Body'></Accordion>
        <Button></Button>
        <Card
          testid='{TEST_CARD_ID}'
          title='{CARD_TITLE_STRING}'
          image='{CARD_IMAGE_STRING}'
          text='{CARD_TEXT_STRING}'></Card>
        <Carousel slides={TEST_SLIDES}></Carousel>
        <Codefield value='input' count={3}></Codefield>
        <Headline
          titleText='{HEADLINE_TITLE_TEXT}'
          text='{HEADLINE_BODY_TEXT}'
          alignment='center'
          titleTag='h2'
          fontSize='xl'></Headline>
        <Nav navItems={NAV_TEST_ITEMS}></Nav>
        <Text text='Text' textTag='p'></Text>
        <Container>{TEST_CHILDREN_MULTIPLE}</Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
