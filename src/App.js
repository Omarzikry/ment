import React, { Component } from 'react';
import './normalize.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from "react-router-dom"
import Carousel from './components/UI/Carousel/Carousel';
import Navs from './components/UI/Navs/Navs';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Carousel auto={true}/>
        <Navs />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
