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
import Greenbelt from "../assets/Greenbelt.png";

const Architectural = () => {
  return (
    <div className="contentBackground">
      <Navbar />
      <div>
        <img className="fixed h-full w-full" src={Greenbelt} />
      </div>
      <div>
        <div className="contentEvents"></div>
        <div className="pt-20 pb-5 flex justify-between items-center object-center w-full h-full px-2 2xl:px-16 relative text-white/90">
          <h1 className="mt-10 ml-10">Home Types</h1>
        </div>

        <div className="container relative pl-10 pb-20">
          <div className="relative bg-gray-600 py-10 lg:w-85 rounded text-center border-b-4 flex justify-center opacity-75 ...">
            <div className="grid gap-x-40 gap-y-10 md:grid-cols-1 xl:grid-cols-3 pl-10">
              <div className="transform h-64 w-80 transition duration-500 hover:scale-125 flex justify-center items-center">
                <img
                  className=".object-cover h-78 w-96 ..."
                  src={plan1}
                  alt=""
                />
              </div>
              <div className="transform h-64 w-80 transition duration-500 hover:scale-125 flex justify-center items-center">
                <img
                  className=".object-cover h-78 w-96 ..."
                  src={plan2}
                  alt=""
                />
              </div>
              <div className="transform h-64 w-80 transition duration-500 hover:scale-125 flex justify-center items-center">
                <img
                  className=".object-cover h-78 w-96 ..."
                  src={plan3}
                  alt=""
                />
              </div>
              <div className="transform h-64 w-80 transition duration-500 hover:scale-125 flex justify-center items-center">
                <img
                  className=".object-cover h-78 w-96 ..."
                  src={plan4}
                  alt=""
                />
              </div>
              <div className="transform h-64 w-80 transition duration-500 hover:scale-125 flex justify-center items-center">
                <img
                  className=".object-cover h-78 w-96 ..."
                  src={plan5}
                  alt=""
                />
              </div>
              <div className="transform h-64 w-80 transition duration-500 hover:scale-125 flex justify-center items-center">
                <img
                  className=".object-cover h-78 w-96 ..."
                  src={plan6}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center object-center w-full px-2 2xl:px-16 relative text-white/90">
        <h1 className="my-10 ml-10">Home Dimensions</h1>
      </div>
      <div className="container pl-10">
        <div className="py-10 pl-10 w-7/8 bg-gray-600 text-center shadow-inner drop-shadow-2xl border-b-4 p-10 rounded-xl flex-auto opacity-80">
          <div className="container ml-20 w-screen">
            <table className="table-auto border-separate border-spacing-3 border border-black sm:w-5/12 lg:w-10/12 bg-amber-50 shadow-inner drop-shadow-xl text-center ...">
              <thead>
                <tr>
                  <th className="border-b-2 border-black font-serif ...">
                    Model
                  </th>
                  <th className="border-b-2 border-black font-serif ...">
                    Beds
                  </th>
                  <th className="border-b-2 border-black font-serif ...">
                    Sq.Ft.
                  </th>
                  <th className="border-b-2 border-black font-serif ...">MC</th>
                  <th className="border-b-2 border-black font-serif ...">
                    Baths
                  </th>
                  <th className="border-b-2 border-black font-serif ...">
                    Garage
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-serif ...">Stafford (10x)</td>
                  <td className="font-serif ...">2</td>
                  <td className="font-serif ...">1173</td>
                  <td className="font-serif ...">A</td>
                  <td className="font-serif ...">1</td>
                  <td className="font-serif ...">2</td>
                </tr>
                <tr>
                  <td className="font-serif ...">Brentwood (21x)</td>
                  <td className="font-serif ...">3</td>
                  <td className="font-serif ...">1439</td>
                  <td className="font-serif ...">B</td>
                  <td className="font-serif ...">1.75</td>
                  <td className="font-serif ...">2</td>
                </tr>
                <tr>
                  <td className="font-serif ...">Cambridge (31)</td>
                  <td className="font-serif ...">3</td>
                  <td className="font-serif ...">1505</td>
                  <td className="font-serif ...">C</td>
                  <td className="font-serif ...">1.75</td>
                  <td className="font-serif ...">2</td>
                </tr>
                <tr>
                  <td className="font-serif ...">Brookfield (40x)</td>
                  <td className="font-serif ...">4</td>
                  <td className="font-serif ...">1737</td>
                  <td className="font-serif ...">D</td>
                  <td className="font-serif ...">2.5</td>
                  <td className="font-serif ...">2</td>
                </tr>
                <tr>
                  <td className="font-serif ...">Windsor (70)</td>
                  <td className="font-serif ...">4</td>
                  <td className="font-serif ...">1776</td>
                  <td className="font-serif ...">E</td>
                  <td className="font-serif ...">2</td>
                  <td className="font-serif ...">2</td>
                </tr>
                <tr>
                  <td className="font-serif ...">Hampton (51x)</td>
                  <td className="font-serif ...">5</td>
                  <td className="font-serif ...">2026</td>
                  <td className="font-serif ...">F</td>
                  <td className="font-serif ...">3</td>
                  <td className="font-serif ...">2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="relative pl-5 pt-20 pb-10 flex justify-between items-center w-full px-2 2xl:px-16 text-white/90">
        <h1 className="mt-10 ml-10">Home Improvement</h1>
      </div>

      <div className="container px-10 pb-20">
        <div className="bg-gray-600 text-center pb-10 shadow-inner drop-shadow-2xl border-b-4 p-10 rounded-xl flex-auto opacity-80">
          <div className="py-10 px-10">
            <div className="grid gap-x-5 gap-y-10 md:grid-cols-1 lg:grid-cols-3 pb-20">
              <h2 className="pb-10 font-sans font-semibold sm:text-2xl md:text-2xl lg:text-4xl text-white">
                Step 1: Home Improvement Application
              </h2>
              <h2 className="pb-10 font-sans font-semibold sm:text-2xl md:text-2xl lg:text-4xl text-white">
                Step 2: Homeowner Submission Portal
              </h2>
              <h2 className="pb-10 font-sans font-semibold sm:text-2xl md:text-2xl lg:text-4xl text-white">
                Step 3: Comittee Board Reviews Application
              </h2>
            </div>
            <div className="grid gap-x-5 gap-y-10 md:grid-cols-1 lg:grid-cols-3 align-middle md:pl-20 ">
              <div className="transform relative mr-40 pr-32 h-64 w-80 md:w-90 object-scale-down transition duration-500 hover:scale-150 flex justify-center items-center">
                <a href="https://www.greentreehomesirvine.org/_files/ugd/a594a1_c4e1b5f6654447f5aae4581265db337f.pdf">
                  <img
                    className="object-center items-center sm:h-38 sm:w-76 sm:mr-10 lg:h-78 lg:w-96 p-10 ..."
                    src={pdf}
                    alt=""
                  />
                </a>
              </div>
              <div className="transform relative h-64 w-80 transition duration-500 hover:scale-150 flex pr-32 justify-center items-center p-5">
                <a href="https://coastalmngmtandconsulting.appfolio.com/connect/users/sign_in">
                  <img
                    className="rounded-full .object-cover h-78 w-96 ..."
                    src={homeownericon}
                    alt=""
                  />
                </a>
              </div>
              <div className="transform relative h-64 w-80 flex-auto pr-28 justify-center items-center">
                <img
                  className=".object-cover h-78 w-96 ..."
                  src={committee}
                  alt=""
                />
              </div>
            </div>
          </div>
          <p className="font-serif pt-5 lg:text-xl md:text-lg mb-5 text-white">
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
          <p className="font-serif pt-5 lg:text-xl md:text-lg text-white">
            Physical applications can also be mailed to: 4540 Campus Dr. Suite
            100 Newport Beach,CA 92660
          </p>
        </div>
      </div>
      <div className="container px-10 pb-10">
        <div className="bg-gray-600 text-center pb-10 shadow-inner drop-shadow-2xl border-b-4 p-10 rounded-xl flex-auto opacity-80">
          <h2 className="text-4xl pb-5">
            Covenants, Conditions & Restrictions (CC&Rs)
          </h2>
          <p className="font-serif text-lg text-white">
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
          <p className="font-serif pt-5 text-lg text-white">
            In order to maintain the architectural character and aesthetics of
            Greentree, it is necessary that modifications of structures,
            materials and colors be compatible with the dwelling and overall
            architectural style of the immediate area.
          </p>
        </div>
      </div>
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default Architectural;
