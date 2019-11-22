import React from "react";

class Toggle extends React.Component {
  state = { isOn: false };
  toggleFavorite = () => {
    this.setState({ isOn: !this.state.isOn });
  };
  render() {
    return (
      <div onClick={this.toggleFavorite}>
        {this.props.children(this.state.isOn)}
      </div>
    );
  }
}

export default Toggle;
