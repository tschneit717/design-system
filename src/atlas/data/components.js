import React from 'react';
import { Accordion } from '../../components/accordion/Accordion';
import { Button } from '../../components/button/Button';
import { Card } from '../../components/card/Card';
import { Carousel } from '../../components/carousel/Carousel';
import { Codefield } from '../../components/codefield/Codefield';
import { Container } from '../../components/container/Container';
import { Datepicker } from '../../components/datepicker/Datepicker';
import { Footer } from '../../components/footer/Footer';
import { Form } from '../../components/form/Form';
import { Grid } from '../../components/grid/Grid';
import { Header } from '../../components/header/Header';
import { Headline } from '../../components/headline/Headline';
import { InputField } from '../../components/inputfield/InputField';
import { Modal } from '../../components/modal/Modal';
import { Nav } from '../../components/nav/Nav';
import { Product } from '../../components/product/Product';
import { ProductList } from '../../components/productlist/ProductList';
import { Profile } from '../../components/profile/Profile';
import { Tab } from '../../components/tab/Tab';
import { Text } from '../../components/text/Text';

const inputFields = [
  { name: 'Name', type: 'text', label: 'Name' },
  { name: 'Address', type: 'text', label: 'Address' },
];

export const componentData = [
  {
    name: 'accordion',
    title: 'Accordion',
    sourceCode: `<Accordion title="Accordion Title">
  Accordion Body
</Accordion>`,
    component: Accordion,
    details: {
      title: 'Accordion Title',
      body: 'Accordion Body',
    },
  },
  {
    name: 'button',
    title: 'Button',
    sourceCode: `<Button
  text="Button Text"
  function="() => console.log('clicked!')"
  label="Label"
  bgColor="red"
  border="true"
  textColor="Black"
  id="Button Id">
</Button>`,
    component: Button,
    details: {
      text: 'Button Text',
      label: 'Label',
      bgColor: 'red',
      border: 'true',
      textColor: 'Black',
      id: 'Button Id',
    },
  },
  {
    name: 'card',
    title: 'Card',
    sourceCode: `<Card
  text="Text"
  title="Title"
  image="https://via.placeholder.com/350x150"
  imageAlt="Image Alt Text">
</Card>`,
    component: Card,
    details: {
      text: 'Text',
      title: 'Title',
      image: 'https://via.placeholder.com/350x150',
      imageAlt: 'Image Alt Text',
    },
  },
  {
    name: 'carousel',
    title: 'Carousel',
    sourceCode: `const slides = [
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
];

<Carousel slides={slides}></Carousel>`,
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
    name: 'codefield',
    title: 'Code Field',
    sourceCode: `<Codefield count={4} value="Entry"></Codefield>`,
    component: Codefield,
    details: {
      count: 4,
      value: 'Entry',
    },
  },
  {
    name: 'container',
    title: 'Container',
    sourceCode: `<Container>
  <p>Container Text</p>
  <p>Container Text 2</p>
</Container>`,
    component: Container,
    details: {
      children: [
        <p key='container-1'>Container Text</p>,
        <p key='container-2'>Container Text 2</p>,
      ],
    },
  },
  {
    name: 'datepicker',
    title: 'Datepicker',
    sourceCode: `<Datepicker 
  startWeekOnMonday="true"  
  includeNegativeYears="true"
  includePositiveYears="true">
</Datepicker>`,
    component: Datepicker,
    details: {
      text: 'Datepicker text',
      startWeekOnMonday: true,
      includeNegativeYears: true,
      includePositiveYears: true,
    },
  },
  {
    name: 'footer',
    title: 'Footer',
    sourceCode: `<Footer gridCount="3" text="Footer text goes here">
  <div>
    Test Column 1
  </div>
  <div>
    Test Column 2
  </div>
  <div>
    Test Column 3
  </div>
  <div>
    Test Column 4
  </div>
</Footer>`,
    component: Footer,
    details: {
      text: 'Footer text',
      gridCount: '3',
      children: [
        <div key='footer-1' className=''>
          Test Item 1
        </div>,
        <div key='footer-2' className=''>
          Test Item 2
        </div>,
        <div key='footer-3' className=''>
          Test Item 3
        </div>,
        <div key='footer-4' className=''>
          Test Item 4
        </div>,
      ],
    },
  },
  {
    name: 'form',
    title: 'Form',
    sourceCode: `
const inputFields = [
  { name: 'Name', type: 'text', label: 'Name' },
  { name: 'Address', type: 'text', label: 'Address' },
];

<Form inputFields={inputFields}></Form>`,
    component: Form,
    details: {
      inputFields: inputFields,
      testId: 'testid',
    },
  },
  {
    name: 'grid',
    title: 'Grid',
    sourceCode: `<Grid></Grid>`,
    component: Grid,
    details: {
      columnCount: '4',
      rowCount: '2',
      children: [
        <div key='grid-1' className=''>
          Test Item 1
        </div>,
        <div key='grid-2' className=''>
          Test Item 2
        </div>,
        <div key='grid-3' className=''>
          Test Item 3
        </div>,
        <div key='grid-4' className=''>
          Test Item 4
        </div>,
      ],
    },
  },
  {
    name: 'header',
    title: 'Header',
    sourceCode: '<Header></Header>',
    component: Header,
    details: {
      text: 'Header text',
    },
  },
  {
    name: 'headline',
    title: 'Headline',
    sourceCode: `<Headline titleText='Headline Title Text'
  text='Headline Text'
  alignment='Center'
  titleTag='h1'
  fontSize='lg'>
</Headline>`,
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
    name: 'inputfield',
    title: 'Input Field',
    sourceCode: `<InputField label='Name' name='name' type='text'></InputField>`,
    component: InputField,
    details: {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
  },
  {
    name: 'modal',
    title: 'Modal',
    sourceCode: '<Modal></Modal>',
    component: Modal,
    details: {
      triggerText: 'Modal text',
      modalTitle: 'Modal Title',
      triggerTitle: 'Modal Trigger Title ',
      children: [
        <div key='modal-1'>
          <p>Modal Body</p>
        </div>,
      ],
    },
  },
  // {
  //   name: 'nav',
  //   title: 'Nav',
  // sourceCode: '<Nav></Nav>',
  // component: Nav,
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
    name: 'product',
    title: 'Product',
    sourceCode: '<Product></Product>',
    component: Product,
    details: {
      text: 'Product text',
    },
  },
  {
    name: 'productlist',
    title: 'Product List',
    sourceCode: '<Product></Product>',
    component: ProductList,
    details: {
      text: 'Porduct List text',
    },
  },
  {
    name: 'profile',
    title: 'Profile',
    sourceCode: '<Profile></Profile>',
    component: Profile,
    details: {
      text: 'Profile text',
    },
  },
  {
    name: 'tab',
    title: 'Tab',
    sourceCode: '<Tab></Tab>',
    component: Tab,
    details: {
      text: 'Tab text',
    },
  },
  {
    name: 'text',
    title: 'Text',
    sourceCode: `<Text text='Text text' textTag='h1'></Text>`,
    component: Text,
    details: {
      text: 'Text text',
      textTag: 'h1',
    },
  },
];
