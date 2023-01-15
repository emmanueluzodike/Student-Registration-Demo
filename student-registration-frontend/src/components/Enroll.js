import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

const Enroll = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
    const handleAddCourse = () => {

    }


  useEffect(() => {
    axios
      .get("/data/courses.json")
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredCourses = Object.entries(courses).filter(
    ([courseName, course]) => {
      return (
        courseName.toLowerCase().includes(search.toLowerCase()) ||
        course.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  );

  return (
    <div>
      <h1>ENROLL FOR COURSE</h1>
      <div>
        <form>
          <label>Search:</label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <br />
        <br />
        <select onChange={(e) => setSelectedCourse(e.target.value)}>
          <option value="">Select a course</option>
          {filteredCourses.map(([courseName, course]) => (
            <option key={courseName} value={courseName}>
              {courseName}: {course.name}
            </option>
          ))}
        </select>
        <div>
          <Button className="rounded text-white font-semibold bg-green-400 py-2 px-6 my-4 hover:bg-green-700 hover:text-white transition duration-150">
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
