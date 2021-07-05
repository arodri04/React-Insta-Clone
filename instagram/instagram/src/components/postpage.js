import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";
import Searchbar from "./searchbar/searchbar";
import dummydata from "../dummy-data";
import message from "../message.png";
import heart from "../heart.png";
import CommentContainer from "./CommentContainer";
//import PostContainter from "./components/PostContainer";

const PDiv = styled.div`
  width: 1000px;
  margin: 20px auto;
`;
const TDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const PeopleDiv = styled.div`
  border: 1px solid grey;
  width: 80%;
  margin: 20px;
`;
const PersonImage = styled.img`
  margin: 10px 0;
  width: 100%;
  height: auto;
`;

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      dummydata: dummydata,
      comm: "",
      search: ""
    };
  }
  componentDidMount() {
    this.setState({ posts: dummydata });
  }
  CInput = event => {
    this.setState({ comm: event.target.value });
  };
  SInput = event => {
    this.setState({ search: event.target.value });
  };
  Go = () => {
    let dummycopy = this.state.dummydata.slice();
    let dummyend = [];

    for (let i = 0; i < dummycopy.length; i++) {
      if (this.state.search === dummycopy[i].username) {
        dummyend.push(dummycopy[i]);
        this.setState({ dummydata: dummyend });
      }
    }
  };

  like = id => {
    let dummycopy = this.state.dummydata.slice();

    for (let i = 0; i < dummycopy.length; i++) {
      if (dummycopy[i].id === id) {
        dummycopy[i].likes += 1;
      }
    }
    this.setState({ dummydata: dummycopy });
  };
  AddNewComment = id => {
    let dummycopy = this.state.dummydata.slice();

    for (let i = 0; i < dummycopy.length; i++) {
      if (dummycopy[i].id === id) {
        console.log("in if statement");
        dummycopy[i].comments.push({
          id: 22,
          username: "Samosaurus",
          text: this.state.comm
        });
      }
    }
    this.setState({ dummydata: dummycopy });
    // dummycopy[0].comments.push({
    //   id: 22,
    //   username: "Samosaurus",
    //   text: this.state.comm
    // });
    // this.setState({ dummydata: dummycopy });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Searchbar
            search={this.state.search}
            SInput={this.SInput}
            Go={this.Go}
          />
        </header>
        <PDiv>
          <TDiv>
            {this.state.dummydata.map(person => (
              <PeopleDiv>
                <img src={person.thumbnailUrl} />
                {person.username}
                <div className="personimage">
                  <PersonImage src={person.imageUrl} />
                </div>

                <div className="icons">
                  <img
                    onClick={() => {
                      this.like(person.id);
                    }}
                    src={heart}
                  />
                  <img src={message} />
                </div>
                <div className="likes">
                  <h2>{person.likes} Likes</h2>
                </div>
                <div>
                  <CommentContainer
                    stuff={person.comments}
                    comm={this.state.comm}
                  />
                </div>
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    this.AddNewComment(person.id);
                  }}
                  className="commentbar"
                >
                  <input
                    placeholder="Comment"
                    onChange={this.CInput}
                    value={this.state.comm}
                  />
                </form>
              </PeopleDiv>
            ))}
          </TDiv>
        </PDiv>
      </div>
    );
  }
}

export default PostPage;
