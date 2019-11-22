import React from "react";

const withToggle = Comp => {
  return class WithToggle extends React.Component {
    state = { isFavorite: false };
    toggleFavorite = () => {
      this.setState({ isFavorite: !this.state.isFavorite });
    };
    render() {
      console.log("this.props of withToggle", this.props);
      return (
        <div onClick={this.toggleFavorite}>
          <Comp isFavorite={this.state.isFavorite} {...this.props} />
        </div>
      );
    }
  };
};

export default withToggle;
