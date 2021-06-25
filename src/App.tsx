import React from 'react';
import { Headline } from './components/headline/Headline';
import { Button } from './components/button/Button';

import './assets/styles/App.css';

function App() {
  return (
    <div className='App'>
      <Headline
        fontSize='3xl'
        alignment='center'
        titleTag='h1'
        titleText='Headline Title'
        text='Headline Body'></Headline>
      <Button
        textColor='white'
        function={() => console.log('Button')}
        bgColor='green'
        label='Button Component'
        border={true}
        text='Button Component'></Button>
    </div>
  );
}

export default App;
