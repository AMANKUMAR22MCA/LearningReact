import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainComponent from './components/maincomponent'
import Navbar from './components/navbar'


function App() {
  return (
    <div>
      
      <Navbar />
      <MainComponent />
    </div>
  );
}

function Apps() {
  return (
    <div>
      {/* <img src={reactLogo} alt="React Logo" width="100" /> */}
    </div>
  );
}


export { App,  Apps };
