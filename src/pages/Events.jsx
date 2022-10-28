import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Greenbelt from "../assets/Greenbelt.png";
import photos from "../assets/photos.png";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div>

      <Navbar />

      <div>
        <img 
          className=''
          src={Greenbelt} 
          alt="" 
        />
      </div>

        <div className='content'>
          <h1 className='mt-0px pt-10'>Community Events</h1>
          <section class="flex justify-center mt-5">
            <div class="bg-gray-600 py-3 w-3/12 rounded text-center border-b-4 border-green-700 flex justify-center opacity-70 ...">
              <p class="font-sans text-xl w-11/12 text-green-100">
                  Events at Greentree are what keep your community connected and lively. 
                  Join us at one of our events and get to know your neighbors!
              </p>
            </div>
          </section>
          <div>
            <img
              className='saturate-150 pt-10 pb-5 transform h-80 w-96  
                          flex flex-col items-baseline rounded-full cursor-pointer'
              src={photos}
              alt=""
              />
            <text class='flex justify-center text-3xl cursor-pointer'>
              Photos!
            </text>
          </div>
        </div>
        
      <Footer />
    </div>
  );
};

export default Events;
