import React from "react";
import aboutBg from "../assets/about.mp4";
import logo from "../assets/GT.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <video src={aboutBg} autoPlay loop muted />
      <div className="contentAB">
        <div class="flex justify-right">
          <img src={logo} class="object-scale-down h-48 w-92"></img>
        </div>
        <div className="flex justify-start">
          <h2 className="font-medium leading-tight text-4xl mt-0 mb-2 text-white-100">
            About us
          </h2>
        </div>
        <section className="flex justify-center mt-5">
          <div className="bg-gray-600 py-3 w-3/12 rounded text-center border-b-4 border-yellow-700 flex justify-center opacity-70 ...">
            <p className="font-sans text-md w-11/12 text-yellow-100">
              Greentree is the only neighborhood with a HOA within the North El
              Camino project area. The Greentree HOA is a resident group that
              maintains the unnamed private park within the area. Irvine was
              designed as a series of “villages” with each village separated by
              six-lane streets and containing residential areas, commercial
              centers, schools, religious institutions, and open spaces. Irvine
              was envisioned as a community that would allow residents an easy
              and comfortable lifestyle, and included design elements such as
              cul-de-sacs, parks, and greenbelts.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
