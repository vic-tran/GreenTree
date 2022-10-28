import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Greenbelt from "../assets/Greenbelt.png";

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
          <h1 className='mt-0px'>Events</h1>

        </div>
      <Footer />
    </div>
  );
};

export default Events;
