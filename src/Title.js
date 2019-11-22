import React from "react";
import Toggle from "./Toggle";

const Title = ({ text }) => {
  return (
    <Toggle
      render={isColorized => {
        if (isColorized) {
          return (
            <h1 style={{ color: "#f5ce5f", cursor: "pointer" }}>{text}</h1>
          );
        } else {
          return <h1 style={{ color: "white", cursor: "pointer" }}>{text}</h1>;
        }
      }}
    ></Toggle>
  );
};

export default Title;
