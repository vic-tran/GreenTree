import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import pool from "../assets/pool.png";
import Greenbelt from "../assets/Greenbelt.png";
import plan3 from "../assets/Plan31x.png";

const Amenities = () => {
  return (
    <div className="contentBackground">
      <Navbar />
      <div className="pl-5 flex justify-between items-center w-full px-2 2xl:px-16">
        <h1>Amenities</h1>
      </div>
      <div class="pb-10 pl-5">
        <p class="font-sans">
          The areas within Greentree homes provide you with a variety of
          activities. Enjoy a paddle in our wonderful swimming pool.Go for a
          stroll through the greenbelt. Improve your basketball game on our
          court within the park. The options are endless!
        </p>
      </div>
      <div class="grid gap-x-5 gap-y-10 md:grid-cols-1 lg:grid-cols-3 pl-8 ">
        <div className="saturate-150 pb-5 transform h-84  w-108 transition duration-500 hover:scale-125 flex justify-center items-center">
          <img class=".object-cover h-108 w-96 ..." src={pool} alt="" />
        </div>
        <div className="saturate-150 pb-5 transform h-164 bg-grey-400 w-108 transition duration-500 hover:scale-125 hover:bg-grey-800 flex justify-center items-center">
          <img class=".object-cover h-108 w-96 ..." src={Greenbelt} alt="" />
        </div>
        <div className="pt-12 transform h-64 w-108 transition duration-500 hover:scale-125 flex justify-center items-center">
          <img class=".object-cover h-78 w-96 ..." src={plan3} alt="" />
        </div>
      </div>
      {/* <div className="pl-5 flex justify-between items-center w-full px-2 2xl:px-16">
        <h1>Home Improvement</h1>
      </div> */}
      <div class="pb-10 pl-5">
        {/* <p>
          Association CCRs ,Article VII. "No building, fence, wall or other
          structure, landscaping or irrigation system, shall be commenced,
          erected or maintained upon the properties, nor shall any exterior
          addition to or change or alteration therein, including patio covers
          and antennas, be made until the plans and specification showing the
          nature, kind, shape, height, materials and location of the same shall
          have been submitted to and approved in writing as to the harmony of
          external design and location in relation to surrounding structures and
          topography by the Board of Directors of the Association or by an
          Architectural Committee comprised of three (3) or more representatives
          appointed by the Board." In order to maintain the architectural
          character and aesthetics of Greentree, it is necessary that
          modifications of structures, materials and colors be compatible with
          the dwelling and overall architectural style of the immediate area.
        </p> */}
      </div>
      <Footer />
    </div>
  );
};

export default Amenities;
