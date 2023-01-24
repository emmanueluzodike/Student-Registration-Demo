import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentService from "../service/StudentService";
import Course from "./Course";
import TableHead from "./TableHead";

const CoursesList = () => {
  const navigate = useNavigate();

  const [courseList, setCourseList] = useState(null);
  const [loading, setLoading] = useState(true);

  const studentId = localStorage.getItem("studentId");

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await StudentService.listAllCourses(studentId);
        console.log(response.data);
        setCourseList(response.data);
        console.log("course list: " + courseList);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
      console.log("course list: " + courseList)
    };
    fetchCourses();  }, []);

    const deleteCourse = (e, id) => {
      e.preventDefault();
      StudentService.deleteCourse(studentId, id)
      .then((response) => {
        if(courseList){
          setCourseList((prevElement) =>{
            return prevElement.filter((course) => course.id !== id)
          });
        }
      })
        .catch((error) => {
          console.log(error);
        });
    }

  return (
    <div>
      <h1>My Courses</h1>
      <div>
        <table>
          <TableHead />
          {!loading && (
            <tbody>
              {courseList.map((course) => (
                <Course course={course} deleteCourse = {deleteCourse} key={course.id} />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CoursesList;
