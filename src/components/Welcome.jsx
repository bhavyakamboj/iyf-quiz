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
        <Jumbotron>
          <h1 className="display-3">Hare Krishna</h1>
          <p className="lead">Welcome to Vedic Quiz by Iskcon Dwarka</p>
          <p className="lead">
          <Link to="/quiz" color="primary" className="btn btn-primary">Start Quiz</Link>
        </p>
        </Jumbotron>
      </Container>
    );
  }
}

export default Welcome;