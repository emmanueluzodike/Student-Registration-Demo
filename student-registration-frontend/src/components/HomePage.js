import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();


    const name = localStorage.getItem('name')
    const studentId = localStorage.getItem('studentId')

    const handleMyClasses = (e) => {
      e.preventDefault();
      localStorage.setItem('studentId', studentId);
      navigate('/my-classes');
    }

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="container mx-auto p-2 flex flex-wrap items-center">
          <div className="flex-1 text-white">
            <div>Welcome, {name} </div>
          </div>
          <div className="flex-1 text-right">
            <a
              href="#"
              className="text-white p-2 hover:bg-gray-700 rounded-lg"
              onClick={() => navigate("/my-profile")}
            >
              My Profile
            </a>
            <a
              href="#"
              className="text-white p-2 hover:bg-gray-700 rounded-lg"
              onClick={() => navigate("/enroll")}
            >
              Enroll
            </a>
            <a
              href="#"
              className="text-white p-2 hover:bg-gray-700 rounded-lg"
              onClick={handleMyClasses}
            >
              My Classes
            </a>

            <a
              href="#"
              className="text-white p-2 hover:bg-gray-700 rounded-lg"
              onClick={() => navigate("/")}
            >
              Log Out
            </a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto p-4">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default HomePage;
