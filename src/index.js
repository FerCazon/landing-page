// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './logo.png';
import NavBar from './components/navbar/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className='header'>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginLeft: '33%' }}>
        <img src={logo} alt='logo'/>
      </div>
      <NavBar />
    </header>
    <App />
  </React.StrictMode>
);
