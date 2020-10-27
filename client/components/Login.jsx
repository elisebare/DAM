import React, { Component } from "react";
import {render} from 'react-dom';

class Login extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <form 
        onSubmit={() => {
          console.log('submitted');
          this.props.logIn
        }} 
        className="login">
        <label for="username">Username</label>
        <input type="text" name="username"></input>
        <label for="password">Password</label>
        <input type="password" name="password"></input>
        <input type='submit' value='submit'></input>
      </form>
    )
  }
}

export default Login;