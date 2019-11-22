import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import withToggle from "./withToggle";

class Favorite extends React.Component {
  render() {
    const { children, isAdded, color } = this.props;
    return (
      <div>
        <FontAwesomeIcon
          icon={faHeart}
          color={isAdded ? color : ""}
          style={{ cursor: "pointer" }}
        />
        {children}
      </div>
    );
  }
}

export default withToggle({ propertyName: "isAdded" })(Favorite);
