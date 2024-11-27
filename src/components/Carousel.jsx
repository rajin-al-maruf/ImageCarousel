import React from 'react'

const Carousel = ({randomImages}) => {
  return (
    <div>
        <div>
            {/* {randomImages.map(img => (
                <img src={img}/>
            ))} */}
            <img src={randomImages} alt="" />
        </div>
    </div>
  )
}

export default Carousel
