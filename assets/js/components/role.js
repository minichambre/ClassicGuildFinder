import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//require('../css/main.css');

export default class Role extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    switch (this.props.role) {
      case "healer" :
        this.setState({image:"https://fragmentedthought.com/sites/default/files/Healer.png"})
        break;
      case "damage" :
        this.setState({image:"https://fragmentedthought.com/sites/default/files/Damage.png"})
        break;
      case "tank" :
        this.setState({image:"https://fragmentedthought.com/sites/default/files/Tank.png"})
        break;
    }
  }



  render(){
    return (
      <div className="role">
        <img src={this.state.image}/>
        <span> {this.props.filled}/{this.props.slots} </span>
      </div>
    );
  }
}
