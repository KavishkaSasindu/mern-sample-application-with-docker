import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="w-screen flex items-center justify-center mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white w-[90%] p-10">
          {/* Left Section */}
          <div className="md:w-1/2 w-full p-5">
            <h1 className="text-5xl font-bold text-gray-900">
              Hi, I'm <span className="text-black">Kavishka Sasindu,</span>
            </h1>
            <h2 className="text-4xl font-extrabold text-gray-700 mt-2">
              Aspiring DevOps Engineer
            </h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              I am an aspiring DevOps engineer and learning all DevOps tools. I
              have a strong passion for automation, continuous integration, and
              continuous deployment. I enjoy working with cloud platforms and
              containerization technologies like Docker and Kubernetes. My goal
              is to streamline development processes and improve operational
              efficiency.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition duration-300">
                Hi
              </button>
              <button className="border-2 border-black px-6 py-3 rounded-lg font-medium text-gray-900 hover:bg-gray-200 transition duration-300">
                Demo
              </button>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="md:w-1/2 w-full p-5 flex justify-center items-center">
            <img
              src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Charles working"
              className="rounded-xl shadow-lg object-cover w-full md:w-4/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
