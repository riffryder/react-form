import React, { Component } from 'react';

import { Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap'

class PageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      address2: '',
    }

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name] : value
    })

  }

  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel}>
            FIRST NAME
          </Col>
          <Col>
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
          <Col >
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
          <Col >
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
            <Button type="submit">Next</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default PageForm;