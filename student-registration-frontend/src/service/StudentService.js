import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students";

class StudentService {
  registerStudent(student) {
    return axios.post(
      "http://localhost:8080/api/v1/students/register",
      student
    );
  }
}

export default new StudentService();
