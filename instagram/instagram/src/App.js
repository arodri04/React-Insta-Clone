import React, { Component } from "react";
import PostPage from "./components/postpage.js";
import Login from "./HOC.js";
import withConditionalRender from "./ConditionalHOC.js";

const ConditionalRender = withConditionalRender(Login)(PostPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Pass: "",
      choice: true
    };
  }
  UserInput = event => {
    this.setState({ Name: event.target.value });
    console.log(this.state.Name);
  };

  Password = event => {
    this.setState({ Pass: event.target.value });
    console.log(this.state.Pass);
  };
  Check = event => {
    event.preventDefault();

    if (this.state.Name === "sam") {
      if (this.state.Pass === "me") {
        this.setState({ choice: !this.state.choice });
      }
    }
  };
  render() {
    return (
      <div>
        <ConditionalRender
          choice={this.state.choice}
          UserInput={this.UserInput}
          Password={this.Password}
          Name={this.state.Name}
          Pass={this.state.Pass}
          Check={this.Check}
        />
      </div>
    );
  }
}

export default App;
