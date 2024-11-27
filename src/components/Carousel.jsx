import React from 'react'

const Carousel = ({randomImages}) => {
  return (
    <div>
        <div className=''>
            {randomImages.map(img => (
                <img src={img}/>
            ))}
        </div>
    </div>
  )
}

export default Carousel
