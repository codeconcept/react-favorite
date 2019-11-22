import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Favorite extends React.Component {
  state = { isFavorite: false };
  toggleFavorite = () => {
    this.setState({ isFavorite: !this.state.isFavorite });
  };
  render() {
    const { children } = this.props;
    const { isFavorite } = this.state;
    return (
      <div>
        <FontAwesomeIcon
          icon={faHeart}
          color={isFavorite ? "#c51d3c" : ""}
          onClick={this.toggleFavorite}
          style={{ cursor: "pointer" }}
        />
        {children}
      </div>
    );
  }
}

export default Favorite;
