import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Carousel from './components/Carousel';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";



function App() {

  const [randomImages, setRandomImages] = useState([
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
    "https://picsum.photos/600/400?random=4",
    "https://picsum.photos/600/400?random=5",
  ])


  const [currentIndex, setCurrentIndex] = useState(0)

  function handlePrev() {
    setCurrentIndex(index => {
     return index === 0? randomImages.length-1 : currentIndex - 1
    })
  }

  function handleNext() {
    setCurrentIndex(index => {
      return index === randomImages.length-1? 0 : currentIndex + 1
     })
  }


  return (
    <div className='max-w-xl mx-auto flex mt-14 items-center'>
      <button onClick={handlePrev} className='bg-gray-700 rounded-full mr-2'>
        <SlArrowLeft size={30} className='p-2 text-white'/>
      </button>
        <Carousel randomImages={randomImages[currentIndex]}/>
      <button onClick={handleNext} className='bg-gray-700 rounded-full ml-2'>
        < SlArrowRight size={30} className='p-2 text-white'/>
      </button>
    </div>
  );
}

export default App;
