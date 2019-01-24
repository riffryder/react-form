import React, { Component } from 'react';

import { Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap';

import './PageForm.css';

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

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name] : value }, () => this.validateField(name, value));
  }

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

  validateForm() {
    this.setState({
      formIsValid: this.state.firstNameValid && this.state.lastNameValid && this.state.addressValid
    });
  }

  errorClass(field) {
    return field.length >= 1 ? '' : 'has-error';
  }

  handleSubmit(e) {
    alert(`First Name: ${this.state.firstName}\nLast Name: ${this.state.lastName}\nAddress: ${this.state.address}\nAddress2: ${this.state.address2}`);
    e.preventDefault();
  }

  render() {

    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup
        >
          <Col componentClass={ControlLabel}>
            FIRST NAME
          </Col>
          <Col
            className={this.errorClass(this.state.firstName)}
          >
            <FormControl
              type="text"
              name="firstName"
              onChange={this.handleUserInput}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel}>
            LAST NAME
          </Col>
          <Col className={this.errorClass(this.state.lastName)}>
            <FormControl
              type="text"
              name="lastName"
              onChange={this.handleUserInput}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel}>
            ADDRESS
          </Col>
          <Col className={this.errorClass(this.state.address)}>
            <FormControl
              type="text"
              name="address"
              onChange={this.handleUserInput}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel}>
            ADDRESS 2
          </Col>
          <Col >
            <FormControl
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
              className="nextButton"
            > Next 
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default PageForm;