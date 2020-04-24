import React, { useState } from "react";
import axios from "axios";

const Login = () => {
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

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
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
        />
      </form>
    </>
  );
};

export default Login;
