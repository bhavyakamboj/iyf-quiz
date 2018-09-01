import React, { Component } from "react";
import { Container, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { saveDetails } from '../actions';

class Details extends Component {
  onSubmit = () => {
    //save name and number to state
    // this.props.history.push("/final/");
  };
  render() {
    const { handleSubmit } = this.props;

    return (
      <Container>
        <p>Please enter your contact details to view result</p>
        <form>
          <Field label="Name" name="name" component={this.renderField} />
          <Field label="Contact" name="contact" component={this.renderField} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Container>
    );
  }
}

function validate(values){
    //TODO
}

// export default reduxForm({
//     validate,
//     form: 'SaveDetailsForm'
// })(connect(null, { saveDetails })(Details));

export default Details;