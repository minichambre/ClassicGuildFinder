import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Create extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      instance: "",
      level: 0,
      server: "",
      dps: 0,
      healer:0,
      tank:0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  componentDidMount() {
  }

  handleSubmit(event){
    event.preventDefault();
    let data = {
      instance: this.state.instance,
      level: this.state.level,
      server: this.state.server,
      healer: this.state.healer,
      dps: this.state.dps,
      tank: this.state.tank
    }
    this.sendData(data);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
}

   sendData(data) {
    var XHR = new XMLHttpRequest();
    var urlEncodedData = "";
    var urlEncodedDataPairs = [];
    var name;

    // Turn the data object into an array of URL-encoded key/value pairs.
    for(name in data) {
      urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }

    // Combine the pairs into a single string and replace all %-encoded spaces to
    // the '+' character; matches the behaviour of browser form submissions.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

    // Define what happens on successful data submission
    XHR.addEventListener('load', function(event) {
      alert('Yeah! Data sent and response loaded.');
    });

    // Define what happens in case of error
    XHR.addEventListener('error', function(event) {
      alert('Oops! Something goes wrong.');
    });

    // Set up our request
    XHR.open('POST', '/api/group/create');

    // Add the required HTTP header for form data POST requests
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Finally, send our data.
    XHR.send(urlEncodedData);
  }


  render(){
    return (
      <React.Fragment>
        {this.props.visible &&
          <div className="createBackground">
            <div className="create">
            <h1> Start a Group </h1>
            <form onSubmit={this.handleSubmit}>

              <div className="createInput">
              <label>Instance:</label>
                <input onChange={this.handleInputChange} type="text" placeholder="instance" value={this.state.instance} name="instance"/>
              </div>

              <div className="createInput">
              <label>Server:</label>
                <input onChange={this.handleInputChange} type="text" placeholder="server" value={this.state.server} name="server"/>
              </div>

              <div className="createInput">
              <label>Level req:</label>
              <input onChange={this.handleInputChange} type="text" placeholder="level" value={this.state.level} name="level"/>
              </div>

              <div className="createInput">
              <label>Dps slots:</label>
              <input onChange={this.handleInputChange} type="text" placeholder="DPS Slots" value={this.state.dps} name="dps"/>
              </div>

              <div className="createInput">
              <label>Healer slots:</label>
              <input onChange={this.handleInputChange} type="text" placeholder="Healer Slots" value={this.state.healer} name="healer"/>
              </div>

              <div className="createInput">
              <label>Tank slots:</label>
              <input onChange={this.handleInputChange} type="text" placeholder="Tank Slots" value={this.state.tank} name="tank"/>
              </div>

              <button onClick={this.sendForm}> Create </button>

            </form>
            </div>
          </div>
        }
      </React.Fragment>
    );
  }
}
