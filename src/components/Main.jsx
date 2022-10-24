import React from 'react'
import videoBg from '../assets/bg.mp4'
import About from '../pages/About.jsx'
import Amenities from '../pages/Amenities.jsx'

export const main = () => {
  return (
    <div>
      <div className='main'>
        <video src={videoBg} autoPlay loop muted />
          <div className='content'>
            <h1>Welcome to</h1>
            <h1>Greentree Homes</h1>
              <section class="flex justify-center mt-5">
                <div class= "bg-gray-600 py-3 w-4/12 rounded text-center border-b-4 border-white flex justify-center opacity-80 ...">
                  <p class="font-sans text-xl w-11/12">Irvine's hidden gem with 626 single family homes at the city's center. 
                    As one of the oldest neighborhoods in Irvine, this area has a rich history and has 
                    made significant contributions to the fabric of Irvine City.
                  </p>
                </div>
              </section>
            </div>
        </div>
      <Amenities />
    </div>
    
  )
}

export default main;