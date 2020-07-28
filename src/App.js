import React, { Component } from 'react';
// styles
import './styling/index.css'
// libraries
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { Container, Row, Column } from 'react-bootstrap'
// components
import Landing from './views/Landing/Landing'
import Navigation from './views/Navigation/Navigation'
import TNR from './views/TNR/TNR'
import Adopt from './views/Adopt/Adopt'
import About from './views/About/About'
import Available from './views/Available/Available'
import Donate from './views/Donate/Donate'

const App = () => {
  return (
    <HashRouter>
      <Container className="App">
        <Container className='top'>
          <Navigation />
        </Container>
        <Container className='content'>
          <Route exact path='/' component={Landing} />
          <Route path='/TNRd' component={TNR} />
          <Route path='/Adopted' component={Adopt} />
          <Route path='/Available' component={Available} />
          <Route path='/About' component={About} />
          <Route path='/Donate' component={Donate} />
        </Container>
      </Container>
    </HashRouter>
  );
}

export default App;
