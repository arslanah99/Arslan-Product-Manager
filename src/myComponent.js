import React, { Component } from 'react';
import './App.css';

class MyComponent extends Component {
  render() {

    return (
      <div className="MyComponent">
        <h1>Title: {this.props.title}</h1>
        <h2>Name: {this.props.name}</h2>
      </div>
    );
  }
}

export default MyComponent;
