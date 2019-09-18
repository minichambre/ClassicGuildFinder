import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DirectoryItem from "./directoryitem.js"
//require('../css/main.css');

export default class DirectoryListings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }



  render(){
    return (
      <div className="directoryListings">
      <DirectoryItem/>
      <DirectoryItem/>
      <DirectoryItem/>
      </div>
    );
  }
}
