import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Favorite extends React.Component {
  state = {};
  render() {
    const { children } = this.props;
    return (
      <div style={{ display: "inline" }}>
        <FontAwesomeIcon icon={faHeart} />
        {children}
      </div>
    );
  }
}

export default Favorite;
