import React, { Component } from 'react';
// styles
import './styling/index.css'
// libraries
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { Container, Row, Column } from 'react-bootstrap'
// components
import Landing from './views/Landing/Landing'
import Navigation from './views/Navigation/Navigation'

const App = () => {
  return (
    <HashRouter>
      <Container className="App">
        <Container className='top'>
          <Navigation />
        </Container>
        <Container className='content'>
          <Route exact path='/' component={Landing} />
          <Route path='/TNRd' component={Landing} />
          <Route path='/Adopted' component={Landing} />
          <Route path='/Available' component={Landing} />
          <Route path='/About' component={Landing} />
          <Route path='/Donate' component={Landing} />
        </Container>
      </Container>
    </HashRouter>
  );
}

export default App;
