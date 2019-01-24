import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import PageForm from './components/PageForm.js';
import logo from './assets/GiantRobotLTD_Logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <Grid className="wrapper">
        <Row>
          <Col xs={12} md={8} className="welcomeColumn">
            <header className="welcomeHeader">
              <img src={logo} alt="logo" className="logo"/>
              <h1>Welcome</h1>
              <p>Please tell us a bit about yourself to get started.</p>
            </header>
          </Col>
          <Col xs={12} md={4}>
            <PageForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
