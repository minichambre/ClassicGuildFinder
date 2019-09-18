import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Directory from './directory.js'
//require('../css/main.css');

export default class Application extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    switch (this.props.view) {
      case "default" :
        this.setState({view: <Directory/>})
    }
  }



  render(){
    return (
      <div className="applicationContainer">
        {this.state.view}
      </div>
    );
  }
}
