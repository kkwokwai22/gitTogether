import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import GitUserList from './components/gituser/GitUserList';
import Githublogin from './components/login/Githublogin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">
            <Githublogin />
          </div>
        </header>
        <GitUserList />
      </div>
    );
  }
}

export default App;
