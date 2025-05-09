import React from 'react';
import reactLogo from '../assets/react.svg'

export default function Navbar() {
  return (
<header>
    <nav>
        <img src={reactLogo} className= " "  alt="React Logo"  />
        <span>React Facts</span>
    </nav>
</header>
  );
}