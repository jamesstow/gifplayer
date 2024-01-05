import React from 'react';
import * as content from "./content";
import './App.css';
import { GifPlayer } from './GifPlayer';

function App() {
  return (
    <div className="gif-player">
      <GifPlayer contentSource={content.ContentSource} />
    </div>
  );
}

export default App;
