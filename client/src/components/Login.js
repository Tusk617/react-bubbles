import React, { useState } from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({

    username: '',
    password: ''
    
  })
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <input 
          type="text"
          placeholder="Username:"
        /><br/>
        <input 
          type="password"
          placeholder="password"
        
        />
      </form>
    </>
  );
};

export default Login;
