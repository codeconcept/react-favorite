import React from "react";
import withToggle from "./withToggle";

const Image = ({ title, url, isFavorite }) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <h3>{title}</h3>
      <img src={url} alt={title} style={{ width: "65%" }} />
      <br />
      <small> {isFavorite ? "Ajoutée aux favoris" : ""}</small>
    </div>
  );
};

export default withToggle(Image);
