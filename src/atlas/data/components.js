import { Accordion } from '../../components/accordion/Accordion';
import { Button } from '../../components/button/Button';
import { Card } from '../../components/card/Card';
import { Carousel } from '../../components/carousel/Carousel';
import { Codefield } from '../../components/codefield/Codefield';
import { Container } from '../../components/container/Container';
import { Datepicker } from '../../components/datepicker/Datepicker';
import { Footer } from '../../components/footer/Footer';
import { Form } from '../../components/form/Form';
import { Header } from '../../components/header/Header';
import { Headline } from '../../components/headline/Headline';
import { Inputfield } from '../../components/inputfield/InputField';
import { Modal } from '../../components/modal/Modal';
import { Nav } from '../../components/nav/Nav';
import { Product } from '../../components/product/Product';
import { ProductList } from '../../components/productlist/ProductList';
import { Profile } from '../../components/profile/Profile';
import { Tab } from '../../components/tab/Tab';
import { Text } from '../../components/text/Text';

export const componentData = [
  {
    name: 'Accordion',
    component: Accordion,
    details: {
      title: 'Accordion Title',
      body: 'Accordion Body',
    },
  },
  {
    name: 'Button',
    component: Button,
    details: {
      text: 'Button Text',
      function: '',
      label: 'Label',
      bgColor: 'red',
      border: 'true',
      textColor: 'Black',
      id: 'Button Id',
    },
  },
  {
    name: 'Card',
    component: Card,
    details: {
      text: 'Text',
      title: 'Title',
      image: 'https://via.placeholder.com/350x150',
      imageAlt: 'Image Alt Text',
    },
  },
  {
    name: 'Carousel',
    component: Carousel,
    details: {
      slides: [
        {
          id: 'Slide ID 1',
          image: 'https://via.placeholder.com/800x150',
          title: 'Slide Title 1',
          text: 'Slide Text 1',
          ctaLink: '#',
          ctaText: 'Slide Button Text 1',
        },
        {
          id: 'Slide ID 2',
          image: 'https://via.placeholder.com/800x150',
          title: 'Slide Title 2',
          text: 'Slide Text 2',
          ctaLink: '#',
          ctaText: 'Slide Button Text 2',
        },
        {
          id: 'Slide ID 3',
          image: 'https://via.placeholder.com/800x150',
          title: 'Slide Title 3',
          text: 'Slide Text 3',
          ctaLink: '#',
          ctaText: 'Slide Button Text 3',
        },
      ],
    },
  },
  {
    name: 'Codefield',
    component: Codefield,
    details: {
      count: 4,
      value: 'Entry',
    },
  },
  {
    name: 'Container',
    component: Container,
    details: {
      children: ['<p>Container Text</p>', '<p>Container Text 2</p>'],
    },
  },
  {
    name: 'Datepicker',
    component: Datepicker,
    details: {
      text: 'Datepicker text',
    },
  },
  {
    name: 'Footer',
    component: Footer,
    details: {
      text: 'Footer text',
    },
  },
  {
    name: 'Form',
    component: Form,
    details: {
      text: 'Form text',
    },
  },
  {
    name: 'Header',
    component: Header,
    details: {
      text: 'Header text',
    },
  },
  {
    name: 'Headline',
    component: Headline,
    details: {
      titleText: 'Headline Title Text',
      text: 'Headline Text',
      alignment: 'Center',
      titleTag: 'h1',
      fontSize: 'lg',
    },
  },
  {
    name: 'Input field',
    component: Inputfield,
    details: {
      text: 'Input field text',
      value: 'Input field value',
    },
  },
  {
    name: 'Modal',
    component: Modal,
    details: {
      text: 'Modal text',
    },
  },
  // {
  //   name: 'Nav',
  //   component: Nav,
  //   details: {
  //     navItems: [
  //       {
  //         link: '#',
  //         text: 'Home',
  //       },
  //       {
  //         link: '#',
  //         text: 'About',
  //       },
  //       {
  //         link: '#',
  //         text: 'Products',
  //       },
  //     ],
  //   },
  // },
  {
    name: 'Product',
    component: Product,
    details: {
      text: 'Product text',
    },
  },
  {
    name: 'Product List',
    component: ProductList,
    details: {
      text: 'Porduct List text',
    },
  },
  {
    name: 'Profile',
    component: Profile,
    details: {
      text: 'Profile text',
    },
  },
  {
    name: 'Tab',
    component: Tab,
    details: {
      text: 'Tab text',
    },
  },
  {
    name: 'Text',
    component: Text,
    details: {
      text: 'Text text',
      textTag: 'h1',
    },
  },
];
