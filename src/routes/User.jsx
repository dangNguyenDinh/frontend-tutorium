import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import Login from "../pages/Auth";
import Navbar from "../components/Navbar";
import Find from "../pages/FindTutor";
import SignupTutor from "../pages/SignupTutor";
import TutorRegister from "../pages/TutorRegister";
function User() {
  return (
    <Router>


      <Routes>
        <Route path="/tutorRegister" element={<TutorRegister />} />
        <Route path="/signupTutor" element={<SignupTutor />} />
        <Route path="/find" element={<Find />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default User;
