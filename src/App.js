import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SurahList from './components/SurahList';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Container fluid className="mt-5 p-0">
          <SurahList />
        </Container>        
      </div>
    );
  }
}

export default App;
