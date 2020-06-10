import React from 'react';
import './styling/index.css'
import Landing from './views/Landing/Landing'
import Navigation from './views/Navigation/Navigation'

const App = ()  => {
  return (
    <div className="App">
      <Navigation />
      <Landing />
    </div>
  );
}

export default App;
