import React from "react";
// import "./postcontainer.css";
import styled from "styled-components";
import message from "../message.png";
import heart from "../heart.png";
import CommentContainer from "./CommentContainer";

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

const PostContainer = props => {
  return (
    <PDiv>
      <TDiv>
        {props.dummydata.map(person => (
          <PeopleDiv>
            <img src={person.thumbnailUrl} />
            {person.username}
            <div className="personimage">
              <img src={person.imageUrl} />
            </div>

            <div className="icons">
              <img onClick={props.like} src={heart} />
              <img src={message} />
            </div>
            <div className="likes">
              <h2>{person.likes} Likes</h2>
            </div>
            <div>
              <CommentContainer stuff={person.comments} comm={props.comm} />
            </div>
          </PeopleDiv>
        ))}
      </TDiv>
    </PDiv>
  );
};

export default PostContainer;
