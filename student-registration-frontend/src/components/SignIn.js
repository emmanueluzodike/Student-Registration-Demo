import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import StudentService from "../service/StudentService";

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

const SignIn = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  

const handleSubmit = (e) => {
  e.preventDefault();
  // Send the form data to your backend
  StudentService.studentSignIn(emailAddress, password)
  .then((response) => {
    console.log(response);
    const name = response.data.firstName
    localStorage.setItem("name", name)
    localStorage.setItem("studentId", response.data.id)
    navigate('/home')
  })
  .catch((error) => {
    console.log(error)
  })

};

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-medium m-4 text-center">Sign in</h1>
      <form
        className={`${classes.form} bg-white p-6 rounded-lg shadow-md`}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <TextField
            label="Email Address"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-4">
          <TextField
            label="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        
     
        <Button variant="contained" color="primary" type="submit">
          {" "}
          Login{" "}
        </Button>
        <div className="my-4 flex flex-row">
          <p>Don't have an account?</p>
          <a
            className="
            mx-1
          text-blue-500 
          underline 
          hover:text-blue-1000"
            href="#"
            onClick={() => navigate("/register")}
          >
            Register
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
