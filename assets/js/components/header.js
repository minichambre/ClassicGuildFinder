import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//require('../css/main.css');

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }



  render(){
    return (
      <div className="headerContainer">
        <div className="header">
          <div className="logoContainer">
            <img src="https://placekitten.com/100/100"/>
            <h1> Classic Group Finder </h1>
          </div>

          <div className="dropdown">
          Search
          </div>

          <div className="dropdown">
          Create
          </div>

          <div className="dropdown">
          Profile
          </div>

        </div>
      </div>
    );
  }
}
