import React from "react";
import "./postcontainer.css";
import message from "../message.png";
import heart from "../heart.png";
import CommentContainer from "./CommentContainer";

const PostContainer = props => {
  return (
    <div className="postcontainer">
      <div className="posttitle">
        {props.dummydata.map(person => (
          <div className="people">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
