import React, { Component } from 'react';

import { Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap'

class PageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    }
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel}>
            FIRST NAME
          </Col>
          <Col>
            <FormControl type="text"/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel}>
            LAST NAME
          </Col>
          <Col >
            <FormControl type="text" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel}>
            ADDRESS
          </Col>
          <Col >
            <FormControl type="text" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel}>
            ADDRESS 2
          </Col>
          <Col >
            <FormControl type="text" />
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