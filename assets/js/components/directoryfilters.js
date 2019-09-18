import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//require('../css/main.css');

export default class DirectoryFilters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }



  render(){
    return (
      <div className="directoryFilters">
        <h2> Refine your search </h2>

        <div className="filters">
          <input placeholder="Search terms"/>
          <select>
            <option> one </option>
            <option> two </option>
          </select>
          <input placeholder="Search terms"/>
        </div>

      </div>
    );
  }
}
