/**
 * ************************************
 *
 * @module  Main -- will render Accounts component and body component
 * @author elisebare
 * @date
 * @description stateful component that renders read, write, add, delete, search functionality
 *
 * ************************************
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";
import Accounts from './Accounts.jsx';

const mapStateToProps = (state) => {
  
  return {
    // add pertinent state here

  };
};

const mapDispatchToProps = (dispatch) => ({
  //add relevant actions here
});

class Main extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {

    return (
      <div>
        <Accounts />
        <div>
          <h4>Body goes here</h4>
        </div>
      </div>
      
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
