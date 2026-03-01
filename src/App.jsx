import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Eleanor Roger</h1>
      <h2>Software Developer</h2>

      <p>
        Welcome to my portfolio website!
      </p>

      <button onClick={() => window.open("https://github.com/El-Rog")}>
        View My Github
      </button>
    </div>
    
  );
}

export default App
