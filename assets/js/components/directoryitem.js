import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Role from "./role.js";
//require('../css/main.css');

export default class DirectoryItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Blackfathom Depths dps & healer",
      instance: "Blackfathom Depths",
      level:20,
      server:"Bladefang"
    };
  }

  componentDidMount() {

  }



  render(){
    return (
      <div className="directoryItem">
        <img src="https://placekitten.com/130/130"/>
        <div className="description">
          <h3> {this.state.name} </h3>
          <div className="subtext">
            <span className="instance"> {this.state.instance} </span>
            <span className="level"> Required Level: {this.state.level} </span>
            <span className="server"> Server: {this.state.server} </span>
          </div>
          <div className="roles">
          <Role role="tank" filled={0} slots={1}/>
          <Role role="healer" filled={0} slots={1}/>
          <Role role="damage" filled={1} slots={3}/>
          <button>Apply</button>
          </div>


        </div>
      </div>
    );
  }
}
