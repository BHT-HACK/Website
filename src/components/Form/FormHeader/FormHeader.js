import React, { Component } from "react";

class FormHeader extends Component {
  render() {
    return (
      <center>
        <h4>{this.props.heading}</h4>
      </center>
    );
  }
}

export default FormHeader;
