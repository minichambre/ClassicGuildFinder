import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('../css/main.css');
import Header from './components/header.js'
import Application from './components/application.js'
export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
  }



  render(){
    return (
      <React.Fragment>
        <Header/>
        <Application view={"default"}/>
      </React.Fragment>
    );
  }
}


ReactDOM.render(<Main/>, document.getElementById('react-root'));
