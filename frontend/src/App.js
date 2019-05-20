import React, {Component} from 'react';
import client from './rest-client.js';
import './main.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: null
    };
  }

  componentDidMount() {
    client.getHelloMessage()
      .then((res) => {
        this.setState({ message: res.message });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <h2 className="title">Welcome to React - {this.state.message}</h2>
    );
  }
}

export default App;
