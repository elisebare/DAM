/**
 * ************************************
 *
 * @module  AccountsContainer
 * @author
 * @date
 * @description stateful component that renders logins, logouts, and signups
 *
 * ************************************
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";
import Login from "../components/Login.jsx"


const mapStateToProps = (state) => {
  
  return {
    // add pertinent state here
    username: state.users.username,
    password: state.users.password,
    verified: state.users.verified,
    access: state.users.access,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (data) => dispatch(actions.logIn(data)),
  setPassword: (password) => dispatch(actions.setPassword(password)),
  setUser: (username) => dispatch(actions.setUser(username))
});

class Accounts extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <Login {...this.props}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
