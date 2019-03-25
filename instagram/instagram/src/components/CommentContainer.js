import React from "react";
import "./commentcss.css";
const CommentContainer = props => {
  console.log(props);
  return (
    <div className="commentcont">
      {props.stuff.map(com => (
        <div className="comments">
          <h4>{com.username}</h4> <p> {com.text}</p>
        </div>
      ))}
      <div className="commentbar">
        <input placeholder="Comment" />
      </div>
    </div>
  );
};

export default CommentContainer;
