import React from "react";

const withConditionalRender = First => Second => props => {
  if (props.choice) {
    return (
      <First
        choice={props.choice}
        UserInput={props.UserInput}
        Password={props.Password}
        Name={props.Name}
        Pass={props.Pass}
        Check={props.Check}
      />
    );
  }
  return (
    <Second
      choice={props.choice}
      UserInput={props.UserInput}
      Password={props.Password}
      Name={props.Name}
      Pass={props.Pass}
      Check={props.Check}
    />
  );
};

export default withConditionalRender;
