import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Courses from "./components/Courses";
import Enroll from "./components/Enroll";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import RegisterionPage from "./components/RegisterionPage";
//import RegisterPage from "./components/RegisterPage";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      {/* <RegisterPage /> */}
      {/* <RegisterionPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterionPage />} />
          <Route path="/register" element={<RegisterionPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/my-classes" element={<Courses />} />
          <Route path="/my-profile" element={<Profile />} />
          <Route path="/enroll" element={<Enroll />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
