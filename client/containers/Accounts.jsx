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
import CreateAccount from "../components/CreateAccount.jsx"


const mapStateToProps = (state) => {
  
  return {
    // add pertinent state here
    task: state.users.task,
    username: state.users.username,
    password: state.users.password,
    verified: state.users.verified,
    access: state.users.access,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (data) => dispatch(actions.logIn(data)),
  changeTask: (task) => dispatch(actions.changeTask(task)),
  createUser: (data) => dispatch(actions.createUser(data))
});

class Accounts extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    let form;
    let newTask;
    if (this.props.task === 'login'){
      form = <Login {...this.props}/>;
      newTask = 'signup';
    } else {
      form = <CreateAccount {...this.props}/>;
      newTask = 'login';
    }
    return (
      <div>
        {form}
        <button onClick={() => {this.props.changeTask(newTask)}}>
          {newTask}
        </button>
      </div>
      
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
