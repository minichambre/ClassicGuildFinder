import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DirectoryFilters from './directoryfilters.js'
import DirectoryListings from './DirectoryListings.js'
//require('../css/main.css');

export default class Directory extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }



  render(){
    return (
      <div className="directoryContainer">
        <DirectoryFilters/>
        <div className="directory">
          <h1> Find that perfect group faster </h1>
          <DirectoryListings/>
        </div>

      </div>
    );
  }
}
