import React, { Component } from 'react';
import Card from './../ui/Card.jsx';

export default class Home extends Component {
  render() {
    return (
      <div className="Container text-center">
        <h1>Welcome to My Awesome App</h1>
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Loading...</div>
      </div>
    );
  }
};
