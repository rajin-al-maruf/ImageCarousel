import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Carousel from './components/Carousel';

function App() {

  const [randomImages, setRandomImages] = useState([
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
    "https://picsum.photos/600/400?random=4",
    "https://picsum.photos/600/400?random=5",
  ])


  


  return (
    <div>
      <Carousel randomImages={randomImages}/>
    </div>
  );
}

export default App;
