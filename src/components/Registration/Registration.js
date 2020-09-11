import React, { Component } from "react";
import Form from "./../Form/Form";
import FormInput from "./../Form/FormInput/FormInput";
import FormButton from "./../Form/FormButton/FormButton";

class Registration extends Component {
  render() {
    return (
      <Form heading="Register">
        <FormInput type="text" placeholder="First Name" />
        <FormInput type="text" placeholder="Last Name" />
        <FormInput type="text" placeholder="Address Line" />
        <FormInput type="text" placeholder="Post Code" />
        <FormInput type="text" placeholder="City" />
        <FormInput type="text" placeholder="Country" />
        <FormInput type="email" placeholder="Email address" />
        <FormInput type="text" placeholder="Phone Number" />
        <FormInput type="password" placeholder="Password" />
        <FormButton buttonName="Register" />
      </Form>
    );
  }
}

export default Registration;
