import React, { Component } from "react";
import {
  Container,
  Jumbotron
} from "reactstrap";
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import "bootstrap/dist/css/bootstrap.min.css";

class Welcome extends Component {
  onSubmit = () => {
    //save name and number to state
    this.props.history.push("/quiz/");
  };
  render() {
      const { handleSubmit } = this.props;

    return (
      <Container>
        <p className="lead">
          <Link to="/quiz" color="primary" className="btn btn-primary" id="startQuiz">Start Quiz</Link>
        </p>
      </Container>
    );
  }
}

export default Welcome;