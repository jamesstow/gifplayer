import React from 'react';
import * as content from "./content";
import './App.css';
import { GifPlayer } from './GifPlayer';

function App() {
  return (
    <div className="gif-player">
      <GifPlayer contentSource={content.MockContentSource} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
