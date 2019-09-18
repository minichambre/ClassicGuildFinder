import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//require('../css/header.css');

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    console.log("g")
  }



  render(){
    return (
      <h1> III </h1>
    );
  }
}


ReactDOM.render(<Main/>, document.getElementById('react-root'));
