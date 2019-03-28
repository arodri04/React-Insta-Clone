import React, { Component } from "react";

import styled from "styled-components";

const Button = styled.button`
  color: black;
  background: red;
`;

const Login = props => {
  return (
    <div>
      <input placeholder="username" onChange={props.UserInput} />
      <input placeholder="Password" onChange={props.Password} />
      <Button onClick={props.Check}>Login</Button>
    </div>
  );
};

export default Login;
