import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/user/Login";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import AllUser from "./pages/user/AllUser";
import AllDoctors from "./pages/doctors/AllDoctors";
import DoctorDetails from "./pages/doctors/DoctorDetails";
import AllAppointments from "./pages/appointments/AllAppointments";
import AppointmentDetails from "./pages/appointments/AppointmentDetails";
import UserDetail from "./pages/user/UserDetail";
function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/all-users" element={<AllUser />} />
        <Route path="/all-doctors" element={<AllDoctors />} />
        <Route path="/doctor-details/:id" element={<DoctorDetails />} />
        <Route path="/all-appointment" element={<AllAppointments />} />
        <Route path="/doctor-details/:id" element={<AppointmentDetails />} />
        <Route path="//user-details/:id" element={<UserDetail />} />
      </Routes>
    </>
  );
}

export default App;
