import React, { Component } from 'react';
import Services from './Services';
import logo from './logo.svg';
import './App.css';

const services = [
  {
    id: 1,
    title: 'Development',
    desc: 'Elavate your business with fresh development'
  },
  { id: 2,
    title: 'Design',
    desc: 'Elavate your business with a fresh design/look'
  },
  { id: 3,
    title: "Customer Service",
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
        </header>
        {services.map(service => <Services key={service.id} service={service} desc={service.desc} />)}
      </div>
    );
  }
}


export default App;
