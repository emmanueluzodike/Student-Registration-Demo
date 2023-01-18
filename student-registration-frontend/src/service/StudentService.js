import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students";

class StudentService {
  registerStudent(student) {
    return axios.post(
      "http://localhost:8080/api/v1/students/register",
      student
    );
  }

  courseEnroll(studentId, courseName, courseCreditHours) {
    console.log("studentId: " + studentId);
    return axios.post(
      "http://localhost:8080/api/v1/students/enroll/" + studentId + "/courses",
      {
        id: studentId,
        name: courseName,
        creditHours: courseCreditHours,
      }
    );
  }

  studentSignIn(emailAddress, password) {
    console.log("Log in payload: " + emailAddress + " " + password);
    return axios.post("http://localhost:8080/api/v1/students/signin", {
      emailAddress: emailAddress,
      password: password,
    });
  }
}

export default new StudentService();
