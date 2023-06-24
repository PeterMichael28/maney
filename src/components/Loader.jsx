import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";
const Loader = () => {
  return (
    <div className='w-screen h-screen absolute flex justify-center items-center'>
         <BeatLoader
        color="hsla(27, 2%, 73%, 0.34)"
        margin={5}
        size={30}
        speedMultiplier={0.6}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader
