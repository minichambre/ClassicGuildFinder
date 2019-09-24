import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DirectoryItem from "./directoryitem.js"
//require('../css/main.css');

export default class DirectoryListings extends Component {
  constructor(props){
    super(props);

    this.state = {
      listings: ["beans"],
      readyToShow: false
    }
}

  componentDidMount() {
    fetch('/api/groups/get')
      .then(res => res.json())
      .then(json => {
        this.setState({
          listings: json.items,
          readyToShow: true
        })
          console.log(json);
      });

  }


  render() {
    return (
      this.state.readyToShow ?
        (this.state.listings.map((listing) => (
               <div className="directoryListing">
               <DirectoryItem listing = {listing} />
               </div>
        ))) : (<h1> Loading </h1>)
    )

  }


//   render(){
//     var {listings, readyToShow} = this.state;
//     if (!readyToShow){
//       return <div>Loading... </div>
//     }
//     else{
//       return listings.map((listing) => (
//         <div className="directoryListing">
//         <DirectoryItem listing = {listing} />
//         </div>
//       ))
//
//   }
//
// }
}
