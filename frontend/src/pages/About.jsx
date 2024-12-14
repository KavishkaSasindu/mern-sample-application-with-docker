import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-screen h-[85%] bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700 text-center">
          Welcome to our website! We are dedicated to providing the best service
          possible. Our team is passionate and committed to excellence. Thank
          you for visiting our page.
        </p>
      </div>
    </div>
  );
};

export default About;
