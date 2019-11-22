import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import withToggle from "./withToggle";

class Favorite extends React.Component {
  render() {
    const { children, isFavorite, color } = this.props;
    return (
      <div>
        <FontAwesomeIcon
          icon={faHeart}
          color={isFavorite ? color : ""}
          style={{ cursor: "pointer" }}
        />
        {children}
      </div>
    );
  }
}

export default withToggle(Favorite);
