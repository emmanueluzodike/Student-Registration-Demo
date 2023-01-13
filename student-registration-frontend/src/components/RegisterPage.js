import React, { useState } from "react";

const majors = [
  "Computer Science",
  "Business",
  "Engineering",
  "Mathematics",
  "Physics",
  "Biology",
  "Chemistry",
  "English",
  "History",
  "Philosophy",
];

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [selectedMajor, setSelectedMajor] = useState("");

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-4xl font-medium m-4">Register</h1>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col mb-4">
          <label className="text-lg font-medium">First Name:</label>
          <input
            className="border-2 border-gray-300 rounded-lg py-2 px-4"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-medium">Last Name:</label>
          <input
            className="border-2 border-gray-300 rounded-lg py-2 px-4"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-medium">Major:</label>
          <select
            className="border-2 border-gray-300 rounded-lg py-2 px-4"
            value={selectedMajor}
            onChange={(e) => setSelectedMajor(e.target.value)}
          >
            <option value="">Select a major</option>
            {majors.map((major) => (
              <option key={major} value={major}>
                {major}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-lg font-medium">Password:</label>
          <input
            className="border-2 border-gray-300 rounded-lg py-2 px-4"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center my-4">
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
            Register
          </button>
        </div>
        <div className="text-center my-4">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;