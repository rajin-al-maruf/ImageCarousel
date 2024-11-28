import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const Carousel = ({randomImages}) => {

  const [currentIndex, setCurrentIndex] = React.useState(0)

  function handlePrev() {
    setCurrentIndex(index => {
     return index === 0? randomImages.length-1 : index - 1
    })
  }

  function handleNext() {
    setCurrentIndex(index => {
      return index === randomImages.length-1? 0 : index + 1
     })
  }
  
  return (
    <div>
        <div className='relative max-w-xl mx-auto mt-14 overflow-hidden flex items-center rounded-xl'>
            <button onClick={handlePrev} className='bg-gray-800 rounded-full absolute left-0 z-10 ml-2 opacity-60 hover:opacity-80'>
              <SlArrowLeft size={40} className='p-2 text-white'/>
            </button>
            <button onClick={handleNext} className='bg-gray-800 rounded-full absolute right-0 z-10 mr-2 opacity-60 hover:opacity-80'>
              < SlArrowRight size={40} className='p-2 text-white'/>
            </button>

            <div className='flex transition-transform ease-out duration-300'
                style={{transform: `translateX(-${currentIndex*100}%)`}}>
                  {randomImages.map((image, index) => (
                    <img key={index} src={image} className="w-full h-auto" alt={`Slide ${index + 1}`}/>
                  ))}
            </div>
        </div>
    </div>
  )
}

export default Carousel
