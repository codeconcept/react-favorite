import React from "react";
import Toggle from "./Toggle";

const Title = ({ text }) => {
  return (
    <Toggle>
      {isColorized =>
        isColorized ? (
          <h1 style={{ color: "red", cursor: "pointer" }}>{text}</h1>
        ) : (
          <h1 style={{ color: "white", cursor: "pointer" }}>{text}</h1>
        )
      }
    </Toggle>
  );
};

export default Title;
