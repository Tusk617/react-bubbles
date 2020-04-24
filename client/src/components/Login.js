import React, { useState } from "react";
import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({

    username: '',
    password: ''

  })

  const handleInput = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  const login = event => {
    event.preventDefault()
    axiosWithAuth().post('/api/login', credentials)
    .then(response => {
      console.log(response.data);
      localStorage.setItem('token', JSON.stringify(response.data.payload));
      props.history.push('/protected')
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <input 
          type="text"
          placeholder="Username:"
          name="username"
          value={credentials.username}
          onChange={handleInput}
        /><br/>
        <input 
          type="password"
          placeholder="password"
          name="password"
          value={credentials.password}
          onChange={handleInput}
        /><br />
        <input type="submit"/>

      </form>
    </>
  );
};

export default Login;
