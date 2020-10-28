/**
 * This is a login component rendered by the accounts container that hooks to thunk middleware
 * to do a fetch request to the server
 * to log the user in and get the jwt response with authorization level
 */

import React, { Component } from "react";
import {render} from 'react-dom';

class Login extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return (
      <div>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submitted');
            const formNode = document.querySelector('form');
            const formData = {
              username: formNode.username.value,
              password: formNode.password.value,
            };
            console.log(formData)
            this.props.fetchLogin(formData)
            
          }} 
          className="login">
          <label htmlFor="username">Username</label>
          <input type="text" name="username"></input>
          <label htmlFor="password">Password</label>
          <input type="password" name="password"></input>
          <input type='submit' value='submit'></input>
        </form>
        <button onClick={() => {this.props.changeTask(this.props.newTask)}}>
          {this.props.newTask}
        </button>
      </div>
      
    )
  }
}

export default Login;