import React from "react";
import withToggle from "./withToggle";

const Image = ({ title, url, isFavImage }) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <h3>{title}</h3>
      <img src={url} alt={title} style={{ width: "65%" }} />
      <br />
      <small> {isFavImage ? "Ajoutée aux favoris" : ""}</small>
    </div>
  );
};

export default withToggle({ propertyName: "isFavImage" })(Image);
