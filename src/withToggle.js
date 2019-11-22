import React from "react";

const withToggle = ({ propertyName }) => Comp => {
  return class WithToggle extends React.Component {
    state = { isFavorite: false };
    toggleFavorite = () => {
      this.setState({ isFavorite: !this.state.isFavorite });
    };
    render() {
      console.log(
        "this.props of withToggle",
        this.props,
        `propertyName: ${propertyName}`
      );
      const props = {
        [propertyName]: this.state.isFavorite,
        ...this.props
      };
      return (
        <div onClick={this.toggleFavorite}>
          <Comp {...props} />
        </div>
      );
    }
  };
};

export default withToggle;
