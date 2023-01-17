import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import StudentService from "../service/StudentService";

const Enroll = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const studentId = localStorage.getItem("studentId");
  const handleAddCourse = (e) => {
    e.preventDefault();
    const selectedCourseName = selectedCourse;
    const selectedCourseObject = courses[selectedCourseName];
    const courseName = selectedCourseObject.name;
    const courseCreditHours = selectedCourseObject.hours;
    const courseKey = Object.keys(selectedCourseObject);
    console.log("coursekey: " + selectedCourseName);
    console.log("foooo: " + studentId)
    StudentService.courseEnroll(
      studentId,
      selectedCourseName,
      courseCreditHours
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <Button
            className="rounded text-white font-semibold bg-green-400 py-2 px-6 my-4 hover:bg-green-700 hover:text-white transition duration-150"
            onClick={handleAddCourse}
          >
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
