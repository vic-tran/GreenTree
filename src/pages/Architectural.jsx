import React from "react";
import plan1 from "../assets/Plan10x.png";
import plan2 from "../assets/Plan21x.png";
import plan3 from "../assets/Plan31x.png";
import plan4 from "../assets/Plan40x.png";
import plan5 from "../assets/Plan51x.png";
import plan6 from "../assets/Plan70x.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pdf from "../assets/pdficon.png";
import homeownericon from "../assets/HomeownerPortalIcon.png";
import committee from "../assets/committeeicon.png";
import application from "../assets/HomeImprovementApplication.pdf";

const Architectural = () => {
  return (
    <div className="contentBackground">
      <Navbar />
      <div className="pt-20 pb-5 flex justify-between items-center w-full px-2 2xl:px-16">
        <h1>Home Types</h1>
      </div>

      <div className="container pl-10 pb-5">
        <div class="pb-10 pl-5 bg-slate-100 text-center pb-10 shadow-inner drop-shadow-2xl p-10 rounded-xl flex-auto">
          <h2 className="text-3xl pb-10 font-sans font-semibold">
            Choose between our six intricately designed homes for your family to
            build a life together in:
          </h2>
          <div class="grid gap-x-10 gap-y-10 md:grid-cols-1 lg:grid-cols-3 pl-10">
            <div className="transform h-64 w-80 transition duration-500 hover:scale-125 flex justify-center items-center">
              <img class=".object-cover h-78 w-96 ..." src={plan1} alt="" />
            </div>
            <div className="transform h-64 w-80 transition duration-500 hover:scale-125 flex justify-center items-center">
              <img class=".object-cover h-78 w-96 ..." src={plan2} alt="" />
            </div>
            <div className="transform h-64 w-80 transition duration-500 hover:scale-125 flex justify-center items-center">
              <img class=".object-cover h-78 w-96 ..." src={plan3} alt="" />
            </div>
            <div className="transform h-64 w-80 transition duration-500 hover:scale-125 flex justify-center items-center">
              <img class=".object-cover h-78 w-96 ..." src={plan4} alt="" />
            </div>
            <div className="transform h-64 w-80 transition duration-500 hover:scale-125 flex justify-center items-center">
              <img class=".object-cover h-78 w-96 ..." src={plan5} alt="" />
            </div>
            <div className="transform h-64 w-80 transition duration-500 hover:scale-125 flex justify-center items-center">
              <img class=".object-cover h-78 w-96 ..." src={plan6} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container pl-10">
        <div className="pb-10 pl-10 w-7/8 bg-pink-100 text-center shadow-inner drop-shadow-2xl p-10 rounded-xl flex-auto">
          <div className="text-4xl  pt-20 pb-10 flex justify-between items-center px-2 2xl:px-16">
            <h2 className="text-right  font-sans font-semibold">Dimensions of each type of home</h2>
          </div>
          <div className="container ml-20 w-screen">
            <table class="table-auto border-separate border-spacing-3 border border-black lg:w-10/12 w-auto h-auto bg-amber-50 shadow-inner drop-shadow-xl text-center ...">
              <thead>
                <tr>
                  <th class="border-b-2 border-black font-serif ...">Model</th>
                  <th class="border-b-2 border-black font-serif ...">Beds</th>
                  <th class="border-b-2 border-black font-serif ...">Sq.Ft.</th>
                  <th class="border-b-2 border-black font-serif ...">MC</th>
                  <th class="border-b-2 border-black font-serif ...">Baths</th>
                  <th class="border-b-2 border-black font-serif ...">Garage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="font-serif ...">Stafford (10x)</td>
                  <td class="font-serif ...">2</td>
                  <td class="font-serif ...">1173</td>
                  <td class="font-serif ...">A</td>
                  <td class="font-serif ...">1</td>
                  <td class="font-serif ...">2</td>
                </tr>
                <tr>
                  <td class="font-serif ...">Brentwood (21x)</td>
                  <td class="font-serif ...">3</td>
                  <td class="font-serif ...">1439</td>
                  <td class="font-serif ...">B</td>
                  <td class="font-serif ...">1.75</td>
                  <td class="font-serif ...">2</td>
                </tr>
                <tr>
                  <td class="font-serif ...">Cambridge (31)</td>
                  <td class="font-serif ...">3</td>
                  <td class="font-serif ...">1505</td>
                  <td class="font-serif ...">C</td>
                  <td class="font-serif ...">1.75</td>
                  <td class="font-serif ...">2</td>
                </tr>
                <tr>
                  <td class="font-serif ...">Brookfield (40x)</td>
                  <td class="font-serif ...">4</td>
                  <td class="font-serif ...">1737</td>
                  <td class="font-serif ...">D</td>
                  <td class="font-serif ...">2.5</td>
                  <td class="font-serif ...">2</td>
                </tr>
                <tr>
                  <td class="font-serif ...">Windsor (70)</td>
                  <td class="font-serif ...">4</td>
                  <td class="font-serif ...">1776</td>
                  <td class="font-serif ...">E</td>
                  <td class="font-serif ...">2</td>
                  <td class="font-serif ...">2</td>
                </tr>
                <tr>
                  <td class="font-serif ...">Hampton (51x)</td>
                  <td class="font-serif ...">5</td>
                  <td class="font-serif ...">2026</td>
                  <td class="font-serif ...">F</td>
                  <td class="font-serif ...">3</td>
                  <td class="font-serif ...">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="pl-5 pt-20 pb-10 flex justify-between items-center w-full px-2 2xl:px-16">
        <h1>Home Improvement</h1>
      </div>

      <div className="container px-10 pb-10">
        <div class="bg-slate-100 text-center pb-10 shadow-inner drop-shadow-2xl p-10 rounded-xl flex-auto">
          <div className="py-20 px-10">
            <div className="grid gap-x-5 gap-y-10 md:grid-cols-1 lg:grid-cols-3 pb-20">
              <h2 className="sm:text-2xl md:text-2xl lg:text-4xl pb-">Step 1: Home Improvement Application</h2>
              <h2 className="sm:text-2xl md:text-2xl lg:text-4xl pb-">Step 2: Homeowner Submission Portal</h2>
              <h2 className="sm:text-2xl md:text-2xl lg:text-4xl pb-">
                Step 3: Comittee Board Reviews Application
              </h2>
            </div>
            <div class="grid gap-x-5 gap-y-10 md:grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 align-middle pl-20 ">
              <div className="transform relative pr-32 h-64 w-80 object-scale-down transition duration-500 hover:scale-150 flex justify-center items-center">
                <a href="https://www.greentreehomesirvine.org/_files/ugd/a594a1_c4e1b5f6654447f5aae4581265db337f.pdf">
                  <img class="object-center lg:h-78 lg:w-96 p-10 ..." src={pdf} alt="" />
                </a>
              </div>
              <div className="transform relative h-64 w-80 transition duration-500 hover:scale-150 flex pr-32 justify-center items-center p-5">
                <a href="https://coastalmngmtandconsulting.appfolio.com/connect/users/sign_in">
                  <img
                    class="rounded-full .object-cover h-78 w-96 ..."
                    src={homeownericon}
                    alt=""
                  />
                </a>
              </div>
              <div className="transform relative h-64 w-80 flex-auto pr-28 justify-center items-center">
                <img
                  class=".object-cover h-78 w-96 ..."
                  src={committee}
                  alt=""
                />
              </div>
            </div>
          </div>
          <p class="font-serif pt-5 lg:text-xl md:text-lg mb-5">
            Requests to make home amendments/improvements can be made by filling
            out the form above and submitting through the Homeowner portal.
            Click on the{" "}
            <span className="font-serif text-2xl md:text-xl font-extrabold text-red-500">
              PDF
            </span>{" "}
            and{" "}
            <span className="font-serif text-2xl md:text-xl font-extrabold text-cyan-600">
              Homeowner Portal
            </span>{" "}
            icons to access the form and submission portal.
          </p>
          <p className="font-serif pt-5 lg:text-xl md:text-lg">
            Physical applications can also be mailed to: 4540 Campus Dr. Suite
            100 Newport Beach,CA 92660
          </p>
        </div>
      </div>
      <div className="container px-10 pb-10">
        <div class="bg-pink-100 text-center pb-10 shadow-inner drop-shadow-2xl p-10 rounded-xl flex-auto">
          <h2 className="text-4xl pb-5">
            Covenants, Conditions & Restrictions (CC&Rs)
          </h2>
          <p class="font-serif text-lg">
            Association CCRs ,Article VII. "No building, fence, wall or other
            structure, landscaping or irrigation system, shall be commenced,
            erected or maintained upon the properties, nor shall any exterior
            addition to or change or alteration therein, including patio covers
            and antennas, be made until the plans and specification showing the
            nature, kind, shape, height, materials and location of the same
            shall have been submitted to and approved in writing as to the
            harmony of external design and location in relation to surrounding
            structures and topography by the Board of Directors of the
            Association or by an Architectural Committee comprised of three (3)
            or more representatives appointed by the Board."
          </p>
          <p class="font-serif pt-5 text-lg">
            In order to maintain the architectural character and aesthetics of
            Greentree, it is necessary that modifications of structures,
            materials and colors be compatible with the dwelling and overall
            architectural style of the immediate area.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Architectural;
