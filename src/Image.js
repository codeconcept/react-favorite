import React from "react";
import withToggle from "./withToggle";

const Image = ({ title, url, isHearted }) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <h3>{title}</h3>
      <img src={url} alt={title} style={{ width: "65%" }} />
      <br />
      <small> {isHearted ? "Ajoutée aux favoris" : ""}</small>
    </div>
  );
};

export default withToggle(Image, "isHearted");
