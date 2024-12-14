import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { toast } from "react-toastify";

const UserHome = () => {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("error");
        navigate("/signIn");
      }

      const response = await axios.get(
        "http://localhost:5000/api/user/allData",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.data;
      setUser(data.data);
      console.log(data.data);
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

  const handleDelete = async (id) => {
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

      location.reload();
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
      <div className="w-screen h-80px flex justify-center itrms-center mt-10">
        <div className="w-[90%] h-full flex  items-center">
          <div className="flex flex-col w-full">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <caption className="py-2 text-start text-sm text-gray-600">
                      Add User
                    </caption>
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-sm font-medium text-gray-500 uppercase"
                        >
                          Full Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-sm font-medium text-gray-500 uppercase"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-sm font-medium text-gray-500 uppercase"
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-end text-sm font-medium text-gray-500 uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {user.map((userData) => (
                        <tr key={userData.validId}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {userData.validId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {userData.fullname}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {userData.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium space-x-2">
                            <button
                              type="button"
                              onClick={() => {
                                navigate(`/userData/${userData._id}`);
                              }}
                              className="inline-flex items-center gap-x-2 text-sm font-semibold bg-cyan-400 py-1 px-3 rounded-md border border-transparent text-black hover:text-black focus:outline-none focus:text-black disabled:opacity-50 disabled:pointer-events-none"
                            >
                              Full Details
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                navigate(`/userData/update/${userData._id}`);
                              }}
                              className="inline-flex items-center gap-x-2 text-sm font-semibold bg-cyan-400 py-1 px-3 rounded-md border border-transparent text-black hover:text-black focus:outline-none focus:text-black disabled:opacity-50 disabled:pointer-events-none"
                            >
                              Update
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                handleDelete(userData._id);
                              }}
                              className="inline-flex items-center gap-x-2 text-sm font-semibold bg-cyan-400 py-1 px-3 rounded-md border border-transparent text-black hover:text-black focus:outline-none focus:text-black disabled:opacity-50 disabled:pointer-events-none"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
