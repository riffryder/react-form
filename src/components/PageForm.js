import React, { Component } from 'react';

import { Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap';

import './PageForm.css';
import arrow from '../assets/White_Arrow.svg';

class PageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: ' ',
      lastName: ' ',
      address: ' ',
      address2: ' ',
      firstNameValid: false,
      lastNameValid: false,
      addressValid: false,
      formIsValid: false,
      error: 'REQUIRED',
    }

    this.handleUserInput = this.handleUserInput.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handle user input and immediately validate the field

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name] : value }, () => this.validateField(name, value));
  }

  //validates each required field in form for error handling

  validateField(fieldName, value) {
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let addressValid = this.state.addressValid;

    switch(fieldName) {
      case 'firstName':
        firstNameValid = value.length > 1 ? true : false;
        break;
      case 'lastName':
        lastNameValid = value.length > 1 ? true : false;
        break;
      case 'address':
        addressValid = value.length > 1 ? true : false;
        break;
      default:
        break;
    }

    this.setState({
      firstNameValid : firstNameValid,
      lastNameValid: lastNameValid,
      addressValid: addressValid
    }, this.validateForm)
  }

  //validates the whole form to handle the disabled submit button

  validateForm() {
    this.setState({
      formIsValid: this.state.firstNameValid && this.state.lastNameValid && this.state.addressValid
    });
  }

  //adds has-error class to input field if empty 

  errorClass(field) {
    return field.length >= 1 ? '' : 'has-error';
  }

  //handles the submition of the form and alerts all of the info back in a window

  handleSubmit(e) {
    alert(`First Name: ${this.state.firstName}\nLast Name: ${this.state.lastName}\nAddress: ${this.state.address}\nAddress2: ${this.state.address2}`);
    e.preventDefault();
  }

  render() {
    let firstNameErrorClass = this.errorClass(this.state.firstName);
    let lastNameErrorClass = this.errorClass(this.state.lastName);
    let addressErrorClass = this.errorClass(this.state.address);


    return (
      <Form
        horizontal
        onSubmit={this.handleSubmit}
        className="formDiv"
      >
        <FormGroup
        >
          <Col componentClass={ControlLabel}>
            <label>FIRST NAME</label>
            <div className={`requiredField ${firstNameErrorClass ? 'show' : 'hidden'}`}>REQUIRED</div>
          </Col>
          <Col
            className={firstNameErrorClass}
          >
            <FormControl
              className="inputField"
              type="text"
              name="firstName"
              onChange={this.handleUserInput}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel}>
            <label>LAST NAME</label>
            <div className={`requiredField ${lastNameErrorClass ? 'show' : 'hidden'}`}>REQUIRED</div>
          </Col>
          <Col className={lastNameErrorClass}>
            <FormControl
              className="inputField"
              type="text"
              name="lastName"
              onChange={this.handleUserInput}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel}>
            <label>ADDRESS</label>
            <div className={`requiredField ${addressErrorClass ? 'show' : 'hidden'}`}>REQUIRED</div>
          </Col>
          <Col className={addressErrorClass}>
            <FormControl
              className="inputField"
              type="text"
              name="address"
              onChange={this.handleUserInput}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel}>
            <label>ADDRESS 2 (OPTIONAL)</label>
          </Col>
          <Col >
            <FormControl
              className="inputField"
              type="text"
              name="address2"
              onChange={this.handleUserInput}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col>
            <Button
              type="submit"
              disabled={!this.state.formIsValid}
              bsClass="nextButton"
            > Next <img src={arrow} />
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default PageForm;