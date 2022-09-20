import React from "react";
import videoBg from "../assets/bg.mp4";

export const main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>Welcome to Greentree Homes</h1>
      </div>
      <div className="content">
        <h2>
          Irvine's hidden gem with 626 single family homes at the city's center.
        </h2>
      </div>
    </div>
  );
};

export default main;
