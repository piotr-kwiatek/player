import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <audio src="/music/hip-hop-street-legal-14405.mp3" controls></audio>
      </header>
    </div>
  );
}

export default App;
