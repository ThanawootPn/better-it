import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

// import { Button, Col, FormGroup, Label, Input, Row } from "reactstrap";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
// import * as Yup from "yup";
// // import TagInput from "react-tagsinput";
const data=[{ id:1,value:"hd"}]
export default class TagsItems extends React.Component {

  constructor(props) {
    super();
    this.state = { tags: [] };
   
    //console.log(props);
  }

  handleChange = (tags) => {
 
    this.setState({ tags });
    
  };

  render() {
    //console.log(this.state);
    return (
      <Formik
        initialValues={this.state}
        onSubmit={this.onSubmit}
        render={({
          values,
          errors,
          touched,
          status,
          dirty,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          handleReset,
          setTouched,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit} noValidate name="simpleForm">
            <TagsInput
              name="tags"
              value={values.tags}
              onChange={(tags) => {
                   console.log("+++++++++++++++++");
                   console.log("ID: " + this.props.id + " have: " + tags);
                setFieldValue("tags", tags);
              }}
            />
            {/* {this.props.id} */}
          </Form>
        )}
      />
    );
  }
}
