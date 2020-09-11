import React, { Component } from "react";
import FormHeader from "./FormHeader/FormHeader";

class Form extends Component {
  render() {
    return (
      <div
        className="container col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4"
        style={{ marginTop: "50px" }}
      >
        <div className="panel panel-default">
          <div className="panel-heading">
            <FormHeader heading={this.props.heading} />
          </div>
          <div className="panel-body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Form;
