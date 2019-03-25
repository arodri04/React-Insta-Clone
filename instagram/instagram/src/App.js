import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Searchbar from "./components/searchbar/searchbar";
import dummydata from "./dummy-data";
import PostContainter from "./components/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummydata: dummydata
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Searchbar />

          <PostContainter dummydata={this.state.dummydata} />
        </header>
      </div>
    );
  }
}
console.log(dummydata[0].username);
export default App;
