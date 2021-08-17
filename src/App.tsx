import './assets/styles/App.css';
import { Container } from './components/container/Container';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from './components/nav/Nav';
import { Text } from './components/text/Text';

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
        <Nav navItems={NAV_TEST_ITEMS}></Nav>
        <Container>
          <Text text='Hello and welcome to my site' textTag='h2'></Text>
          <Text
            text="There's nothing here, but check out port 1111 to see the atlas viewer"
            textTag='h2'></Text>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
