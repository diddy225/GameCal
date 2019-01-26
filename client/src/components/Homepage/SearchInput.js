import React, { Component } from "react";
import { Input, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

class SearchInput extends Component {
  renderInput =({ input, placeholder }) => {
    return (
        <Input 
          placeholder={placeholder}
          style={{width:'450px'}} 
          {...input}
        />
    )
  };

  onSubmit(formValues) {
    console.log(formValues)
  }

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)} size='small'>
        <Field 
          name="searchInput" 
          component={this.renderInput} 
          placeholder='Red Dead Redemption, Rocket League'
        />
      </Form>
    );
  }
}

export default reduxForm({ form: "SearchInput" })(SearchInput);
