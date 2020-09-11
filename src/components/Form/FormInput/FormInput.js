import React, { Component } from "react";

class FormImput extends Component {
  render() {
    return (
      <div className="form-group">
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          className="form-control"
        ></input>
      </div>
    );
  }
}

export default FormImput;
