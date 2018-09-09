import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './ui/NavBar.jsx';
import Card from './ui/Card.jsx';
import Footer from './ui/Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {this.props.children}
      <Footer />
      </div>
    );
  }
}

export default App;
