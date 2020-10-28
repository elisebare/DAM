/**
 * This is a signout component rendered by the accounts container that hooks to thunk middleware
 * to do a fetch request to the server
 * to log the user out
 */

import React, { Component } from "react";
import {render} from 'react-dom';

class Signout extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return (
      <div>
        <button id='signout' onClick={this.props.fetchSignout}>Sign out</button>
      </div>
    )
  }
}

export default Signout;