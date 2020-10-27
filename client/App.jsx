import React, { Component } from "react";
import {render} from 'react-dom';
import Accounts from './containers/Accounts.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Accounts />
    );
  }
}

export default App;