/**
 * This is a create account component rendered by the accounts container that hooks to thunk middleware
 * to do a fetch request to the server
 * to sign the user up, log the user in and get the jwt response with authorization level
 */

import React, { Component } from "react";
import {render} from 'react-dom';

class CreateAccount extends Component {
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
            email: formNode.email.value,
          };
          console.log(formData);
          this.props.fetchSignup(formData);
          
        }} 
        className="signup">
        <label htmlFor="username">Username</label>
        <input type="text" name="username"></input>
        <label htmlFor="password">Password</label>
        <input type="password" name="password"></input>
        <label htmlFor="email">Email</label>
        <input type="text" name="email"></input>
        <input type='submit' value='submit'></input>
      </form>
      <button onClick={() => {this.props.changeTask(this.props.newTask)}}>
        {this.props.newTask}
      </button>
    </div>
      
    )
  }
}

export default CreateAccount;