import React, { Component } from 'react';
import './normalize.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from "react-router-dom"
import Carousel from './components/UI/Carousel/Carousel';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Carousel/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
