import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);
  return (
    <div>
      {isLogged ? (
        <div className="w-screen h-[80px]  text-white flex justify-center items-center">
          <div className="w-[90%] h-[60px] flex justify-between items-center ">
            <div className="logo-area text-black text-2xl">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="mx-auto h-10 w-auto"
              />
            </div>
            <div className="items-area">
              <ul className="flex space-x-5 text-black text-lg">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/user"}>Admin Area</Link>
                </li>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsLogged(false);
                    navigate("/");
                  }}
                >
                  Sign out
                </button>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-[80px]  text-white flex justify-center items-center">
          <div className="w-[90%] h-[60px] flex justify-between items-center ">
            <div className="logo-area text-black text-2xl">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="mx-auto h-10 w-auto"
              />
            </div>
            <div className="items-area">
              <ul className="flex space-x-5 text-black text-xl">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/signIn"}>Sign in</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
