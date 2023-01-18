import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import StudentService from "../service/StudentService";
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

const useStyles = makeStyles((theme) => ({
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiButton-root": {
      margin: theme.spacing(1),
    },
  },
}));

const RegisterionPage = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [major, setSelectedMajor] = useState("");
  const [emailAddress, setEmailAddress] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your backend
    const student = { firstName, lastName, emailAddress, major, password };
    StudentService.registerStudent(student)
      .then((response) => {
        console.log(response); 
        const name = response.data.firstName
        const studentId = response.data.id
        console.log(name)
        console.log(studentId)
        localStorage.setItem("name", name)
        localStorage.setItem("studentId", studentId) 
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log({ firstName, lastName, emailAddress, password, selectedMajor: major });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-medium m-4 text-center">Register</h1>
      <form
        className={`${classes.form} bg-white p-6 rounded-lg shadow-md`}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-4">
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-4">
          <TextField
            label="Email Address"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-4">
          <TextField
            select
            label="Major"
            value={major}
            onChange={(e) => setSelectedMajor(e.target.value)}
          >
            <MenuItem value="">Select a major</MenuItem>
            {majors.map((major) => (
              <MenuItem key={major} value={major}>
                {major}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="flex flex-col mb-4">
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button variant="contained" color="primary" type="submit">
          {" "}
          Register{" "}
        </Button>
        <div className="my-4 flex flex-row">
          <p>Already have an account?</p>
          <a
            className="
            mx-1
          text-blue-500 
          underline 
          hover:text-blue-1000"
            href="#"
            onClick={() => navigate("/signIn")}
          >
            Sign In
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegisterionPage;
