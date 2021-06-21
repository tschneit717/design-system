import React from "react";
import { Headline } from './components/headline/Headline'

import "./assets/styles/App.css";

function App() {
  return (
    <div className="App">
      <Headline fontSize="3xl" alignment="center" titleTag="h1" titleText="Headline Title" text="Headline Body"></Headline>
    </div>
  )
}

export default App;
