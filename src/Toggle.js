import React from "react";

class Toggle extends React.Component {
  state = { isFavorite: false };
  toggleFavorite = () => {
    this.setState({ isFavorite: !this.state.isFavorite });
  };
  render() {
    return (
      <div onClick={this.toggleFavorite}>
        {this.props.render(this.state.isFavorite)}
      </div>
    );
  }
}

export default Toggle;
