import React from "react";
import Navbar from "../components/Navbar";
import pool from "../assets/pool.png";
import Greenbelt from "../assets/Greenbelt.png";
import rec from "../assets/rec.png";

const Amenities = () => {
  return (
    <div className="contentBackground">
      <Navbar />
      <div className="pl-5 flex justify-between items-center w-full px-2 2xl:px-16 pt-5 pb-5 bg-amber-50">
        <h1>Amenities</h1>
      </div>
      <div className="pb-10 pl-5 bg-amber-50">
        <p className="font-sans">
          The areas within Greentree homes provide you with a variety of
          activities. Enjoy a paddle in our wonderful swimming pool. Go for a
          stroll through the greenbelt. Improve your basketball game on our
          court within the park. The options are endless!
        </p>
      </div>
      <div className="grid gap-x-5 gap-y-10 md:grid-cols-1 lg:grid-cols-3 pl-8 bg-amber-50">
        <div className="saturate-150 pb-5 transform h-164 w-108 transition duration-500 hover:scale-110 flex flex-col justify-center items-center">
          <text className="text-xl text-black">Pool Area</text>
          <img className=".object-cover h-80 w-96 ..." src={pool} alt="pool" />
          <p className="font-sans text-sm">
            The pool has been an integral part of the community since it's
            genesis.
          </p>
        </div>

        <div className="saturate-150 pb-5 transform h-164 w-108 transition duration-500 hover:scale-110 hover:bg-grey-800 flex flex-col justify-center items-center">
          <text className="text-xl text-black">Greenbelt</text>
          <img
            className=".object-cover h-80 w-96  ..."
            src={Greenbelt}
            alt="greenbelt"
          />
          <p className="font-sans text-sm">
            The greenbelt encapsulates the vision of Irvine's city planners.
          </p>
        </div>

        <div className="saturate-150 pb-5 transform h-164 w-108 transition duration-500 hover:scale-110 hover:bg-grey-800 flex flex-col justify-center items-center">
          <text className="text-xl text-black">Recreation</text>
          <img
            className=".object-cover h-80 w-96 ..."
            src={rec}
            alt="recreation"
          />
          <p className="font-sans text-sm">
            The park has various recreation focal points which liven up
            scenery-every day of the week!
          </p>
        </div>
      </div>
      {/* <div className="pl-5 flex justify-between items-center w-full px-2 2xl:px-16">
        <h1>Home Improvement</h1>
      </div> */}
      <div className="pb-10 pl-5 bg-amber-50">
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

           <p class="font-sans">
          The areas within Greentree homes provide you with a variety of
          activities. Enjoy a paddle in our wonderful swimming pool. Go for a
          stroll through the greenbelt. Improve your basketball game on our
          court within the park. The options are endless!
        </p>

        </p> */}
      </div>
    </div>
  );
};

export default Amenities;
