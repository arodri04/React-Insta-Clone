import React, { Component } from "react";

const Login = props => {
  return (
    <div>
      <input placeholder="username" onChange={props.UserInput} />
      <input placeholder="Password" onChange={props.Password} />
      <button onClick={props.Check}>Login</button>
    </div>
  );
};

export default Login;
