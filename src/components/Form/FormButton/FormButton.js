import React, { Component } from "react";

class FormButton extends Component {
  render() {
    return (
      <button className="btn btn-default btn-block">
        {this.props.buttonName}
      </button>
    );
  }
}
export default FormButton;
