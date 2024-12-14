import React from "react";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import UserHome from "./pages/user/UserHome";
import About from "./pages/About";
import OneUserData from "./pages/user/OneUserData";
import UpdateUser from "./pages/user/UpdateUser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/user" element={<UserHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/userData/:id" element={<OneUserData />} />
          <Route path="/userData/update/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
