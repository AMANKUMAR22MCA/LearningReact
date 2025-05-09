import React from 'react';
import './App.css';
import reactLogo from './assets/react.svg';

function Header(){
  return(
    <header>
    <img src={reactLogo} alt="React Logo" width="100" />
    <nav className='nav-list'>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Why React is Important</h1>
      <ul>
        <li>Component-Based Architecture</li>
        <li>Efficient Rendering with Virtual DOM</li>
        <li>Strong Community and Ecosystem</li>
      </ul>
    </div>
  );
}

function PageComponent() {
  return (
    <div>
      
      <Header />
      
      <h2>Why You Are Learning React</h2>
      <ol>
        <li>High demand in the market</li>
      </ol>
      <footer>
      <small>© 2024 Ziroll development. All rights reserved.</small>
    </footer>
    </div>
 
  );
}

export { App, PageComponent };
