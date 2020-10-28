import React, { Component } from "react";
import {render} from 'react-dom';

class CreateAccount extends Component {
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
            email: formNode.email.value,
          };
          console.log(formData);
          this.props.createUser(formData);
          e.preventDefault();
        }} 
        className="signup">
        <label for="username">Username</label>
        <input type="text" name="username"></input>
        <label for="password">Password</label>
        <input type="password" name="password"></input>
        <label for="email">Email</label>
        <input type="text" name="email"></input>
        <input type='submit' value='submit'></input>
      </form>
    )
  }
}

export default CreateAccount;