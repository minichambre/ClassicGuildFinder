import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('../css/main.css');
import Header from './components/header.js'
import Application from './components/application.js'
import Create from "./components/create.js"
export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCreate: false
    };
    this.toggleCreate = this.toggleCreate.bind(this);
  }

  componentDidMount(){
  }


  toggleCreate(){
    this.setState({showCreate: !this.state.showCreate});
  }


  render(){
    return (
      <React.Fragment>
        <Create visible={this.state.showCreate}/>
        <Header showCreateFunction={this.toggleCreate}/>
        <Application view={"default"}/>
      </React.Fragment>
    );
  }
}


ReactDOM.render(<Main/>, document.getElementById('react-root'));
