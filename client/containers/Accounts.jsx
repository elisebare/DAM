/**
 * ************************************
 *
 * @module  AccountsContainer -- will contain login, logout, and signup stuff
 * @author elisebare
 * @date
 * @description stateful component that renders logins, logouts, and signups
 *
 * ************************************
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions.js";

//presentation components for accounts container
import Login from "../components/Login.jsx";
import CreateAccount from "../components/CreateAccount.jsx";
import Signout from "../components/Signout.jsx";

//thunk middleware -- async functions with fetch request to server
import {fetchLogin} from "../actions/actions.js";
import {fetchSignup} from "../actions/actions.js";
import {fetchSignout} from "../actions/actions.js"


const mapStateToProps = (state) => {
  
  return {
    // add pertinent state here
    task: state.users.task,
    username: state.users.username,
    verified: state.users.verified,
    level: state.users.level,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeTask: (task) => dispatch(actions.changeTask(task)),
  fetchLogin: (data) => dispatch(fetchLogin(data)),
  fetchSignup: (data) => dispatch(fetchSignup(data)),
  fetchSignout: (data) => dispatch(fetchSignout(data))
});

class Accounts extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    let form;
    let newTask;
    if (this.props.task === 'login'){
      form = <Login {...this.props} newTask='signup'/>;
      newTask = 'signup';
    } else if (this.props.task === 'logout'){
      form = <Signout {...this.props} />
    } else {
      form = <CreateAccount {...this.props} newTask='login'/>;
      newTask = 'login';
    }
    return (
      <div>
        {form}
      </div>
      
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
