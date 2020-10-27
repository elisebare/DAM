import React, { Component } from "react";
import {render} from 'react-dom';

class Login extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <form 
        onSubmit={(e) => {
          console.log('submitted');
          const formNode = document.querySelector('form');
          const formData = {
            username: formNode.username.value,
            password: formNode.password.value,
          };
          console.log(formData)
          this.props.logIn(formData)
          e.preventDefault();
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