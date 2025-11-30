import React from "react";
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Register from "./pages/Auth/Register.jsx";
import Login from "./pages/Auth/Login.jsx";
import { Toaster } from "react-hot-toast";
import AllDoctor from "./pages/Doctors/AllDoctor.jsx";
import Appointment from "./pages/Doctors/Appointment.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<AllDoctor />} />
        <Route path="/doctors/:id" element={<Appointment />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
