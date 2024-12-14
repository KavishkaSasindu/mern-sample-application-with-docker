import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar";

const OneUserData = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [getOneData, setOneData] = useState({
    validId: "",
    fullname: "",
    username: "",
    email: "",
  });

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/signIn");
      }
      const response = await axios.get(
        `http://localhost:5000/api/user/data/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.data;
      console.log(data);
      setOneData(data.data);
      toast.success(`${data.message}`, {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(`${error.response.data.message}`, {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/user/delete/${id}`
      );

      const data = await response.data;
      console.log(data);
      toast.warning(`${data.message}`, {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/user");
    } catch (error) {
      toast.error(`${error.response.data.message}`, {
        position: "bottom-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-screen flex justify-center items-center mt-20">
        <div className="w-[90%] flex justify-center items-center">
          <div className="w-full ">
            <table className="w-full table-auto divide-y divide-gray-200 space-y-5 ">
              <thead>
                <tr>
                  <th className="text-start">Object ID</th>
                  <th className="text-start">Valid ID</th>
                  <th className="text-start">Full Name</th>
                  <th className="text-start">Username</th>
                  <th className="text-start">Email</th>
                  <th className="text-start">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td scope="col" className="px-3 py-2  whitespace-nowrap">
                    {getOneData._id}
                  </td>
                  <td>{getOneData.validId}</td>
                  <td>{getOneData.fullname}</td>
                  <td>{getOneData.username}</td>
                  <td>{getOneData.email}</td>
                  <td>
                    <div className="space-x-3 flex">
                      <button
                        onClick={handleDelete}
                        className="px-3 py-1 flex justify-center items-center bg-teal-400 rounded-md text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneUserData;
