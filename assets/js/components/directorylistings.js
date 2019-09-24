import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DirectoryItem from "./directoryitem.js"
//require('../css/main.css');

export default class DirectoryListings extends Component {
  constructor(props){
    super(props);

    this.state = {
      listings: [
      {
        id: 1,
        name: "Blackfathom Depths dps & healer",
        instance: "Blackfathom Depths",
        level:20,
        server:"Bladefang"
      },
      {
        id: 2,
        name: "Deadmines tank",
        instance: "Deadmines",
        level: 16,
        server: "Ashbringer"
      },
      {
        id: 3,
        name: "Gnomeregan dps",
        instance: "Gnomeregan",
        level: 30,
        server: "Golemag"
      }
      ]
    }
}

  componentDidMount() {

  }



  render(){
    return this.state.listings.map((listing) => (
      <div className="directoryListing">
      <DirectoryItem listing = {listing} />
      </div>
    ))
  }

}
