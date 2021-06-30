import React from 'react';
import { Carousel } from './components/carousel/Carousel';
import './assets/styles/App.css';
import data from './static/data/slides.json';

function App() {
  return (
    <div className='App'>
      <Carousel slides={data}></Carousel>
    </div>
  );
}

export default App;
