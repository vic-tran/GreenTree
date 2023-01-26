import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Greenbelt from "../assets/Greenbelt.png";
import photos from "../assets/photos.png";
import calendar from "../assets/calendar.png";

const Events = () => {
  return (
    <div>
      <Navbar />

      <div>
        <img className="" src={Greenbelt} alt="" />
      </div>

      <div className="contentevents">
        <div>
          <h1 className="mt-0px pt-10 flex justify-center">Community Events</h1>
          <section className="flex justify-center mt-5">
            <div className="bg-gray-600 py-3 w-3/12 rounded text-center border-b-4 border-green-700 flex justify-center opacity-70 ...">
              <p className="font-sans text-xl w-11/12 text-green-100">
                Events at Greentree are what keep your community connected and
                lively. Join us at one of our events and get to know your
                neighbors!
              </p>
            </div>
          </section>
        </div>

        <div>
          <img
            className="saturate-150 pt-10 pb-5 transform h-80 w-96  
                         flex justify-center items-baseline rounded-2xl cursor-pointer"
            src={photos}
            alt=""
          />
          <text className="flex justify-center text-2xl cursor-pointer">
            Photos!
          </text>
        </div>

        <div>
          <a href="https://www.greentreehomesirvine.org/calendar">
            <img
              className="saturate-150 pt-10 pb-5 transform h-60 w-86 flex justify-center 
                items-baseline cursor-pointer"
              src={calendar}
              alt="calendar"
            />
            <text className="flex justify-center text-2xl cursor-pointer">
              Upcoming Events!
            </text>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
