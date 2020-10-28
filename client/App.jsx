import React, { Component } from "react";
import {render} from 'react-dom';
import Main from './containers/Main.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Main />
    );
  }
}

export default App;