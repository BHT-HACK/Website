import React, { Component } from "react";
import Form from "./../Form/Form";
import FormInput from "./../Form/FormInput/FormInput";
import FormButton from "./../Form/FormButton/FormButton";

class MyProfile extends Component {
  render() {
    return (
      <Form heading="My Profile">
        <FormInput type="text" placeholder="First Name" />
        <FormInput type="text" placeholder="Last Name" />
        <FormInput type="text" placeholder="Address Line" />
        <FormInput type="text" placeholder="City" />
        <FormInput type="text" placeholder="Country" />
        <FormInput type="text" placeholder="Post Code" />
        <FormInput type="text" placeholder="Phone Number" />
        <FormButton buttonName="Edit" />
      </Form>
    );
  }
}

export default MyProfile;
