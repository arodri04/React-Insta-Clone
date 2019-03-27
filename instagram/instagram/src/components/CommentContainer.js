import React from "react";
import "./commentcss.css";
import PropTypes from "prop-types";

const CommentContainer = props => {
  return (
    <div className="commentcont">
      {props.stuff.map(com => (
        <div className="comments">
          <p>
            <strong>{com.username}</strong> {com.text}
          </p>
        </div>
      ))}
    </div>
  );
};
CommentContainer.propTypes = {
  stuff: PropTypes.shape({
    username: PropTypes.number.isRequired,
    text: PropTypes.string
  })
};
export default CommentContainer;
