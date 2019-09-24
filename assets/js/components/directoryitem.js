import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Role from "./role.js";
//require('../css/main.css');

export default class DirectoryItem extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {

  }



  render(){
    return (
      <div className="directoryItem">
        <img src="https://placekitten.com/130/130"/>
        <div className="description">
          <h3> {this.props.listing.name} </h3>
          <div className="subtext">
            <span className="instance"> {this.props.listing.instance} </span>
            <span className="minlevel"> Required Level: {this.props.listing.minlevel} </span>
            <span className="server"> Server: {this.props.listing.server} </span>
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
