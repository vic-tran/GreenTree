import React from "react";
import plan1 from "../assets/Plan10x.png";
import plan2 from "../assets/Plan21x.png";
import plan3 from "../assets/Plan31x.png";
import plan4 from "../assets/Plan40x.png";
import plan5 from "../assets/Plan51x.png";
import plan6 from "../assets/Plan70x.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Architectural = () => {
  return (
    <div className="contentBackground">
      <Navbar />
      <div className="pl-5 flex justify-between items-center w-full px-2 2xl:px-16">
        <h1>Home Types</h1>
      </div>
      <div class="pb-10 pl-5">
        <p class="font-serif">
          Choose between our six intricately designed homes for your family to
          build a life together in:
        </p>
      </div>
      <div class="grid gap-x-5 gap-y-10 md:grid-cols-1 lg:grid-cols-3 pl-10">
        <div className="transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center">
          <img class=".object-cover h-78 w-96 ..." src={plan1} alt="" />
        </div>
        <div className="transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center">
          <img class=".object-cover h-78 w-96 ..." src={plan2} alt="" />
        </div>
        <div className="transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center">
          <img class=".object-cover h-78 w-96 ..." src={plan3} alt="" />
        </div>
        <div className="transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center">
          <img class=".object-cover h-78 w-96 ..." src={plan4} alt="" />
        </div>
        <div className="transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center">
          <img class=".object-cover h-78 w-96 ..." src={plan5} alt="" />
        </div>
        <div className="transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center">
          <img class=".object-cover h-78 w-96 ..." src={plan6} alt="" />
        </div>
      </div>
      <div className="pl-5 flex justify-between items-center w-full px-2 2xl:px-16">
        <h1>Home Improvement</h1>
      </div>
      <div class="pb-10 pl-5">
        <p class="font-serif">
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
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Architectural;
