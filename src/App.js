import React, { Component } from 'react';
import Services from './Services';
import logo from './logo.svg';
import './App.css';

const services = [
  {
    id: 1,
    title: 'Development'
  },
  { id: 2,
    title: 'Design'
  },
  { id: 3,
    title: 'Interstellar'
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
        </header>
        {services.map(service => <Services key={service.id} service={service} />)}
      </div>
    );
  }
}


export default App;
