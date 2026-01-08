import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { addDoctor } from "../../redux/actions/doctorAction";
import InputForm from "../../components/forms/InputForm";
import InputSelect from "../../components/forms/InputSelect";
import { reset } from "../../redux/slice/doctorSlice";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [degree, setDegree] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [experience, setExperience] = useState("");
  const [fees, setFees] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddDoctor = () => {
    if (
      !name ||
      !about ||
      !degree ||
      !speciality ||
      !experience ||
      !fees ||
      !email ||
      !phone ||
      !address ||
      !gender ||
      !image
    ) {
      return toast.error("Provide All The Details");
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("about", about);
    formData.append("degree", degree);
    formData.append("speciality", speciality);
    formData.append("experience", experience);
    formData.append("fees", fees);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("dob", dob);
    formData.append("gender", gender);
    formData.append("image", image);

    dispatch(addDoctor(formData));
  };
  const { success, error } = useSelector((state) => state.doctor);
  useEffect(() => {
    if (success) {
      toast.success("Doctor Created");
      dispatch(reset());
      navigate("/all-doctors");
    }
    if (error) {
      toast.error(error);
      dispatch(reset());
    }
  }, [success, error, dispatch, navigate]);
  return (
    <Layout>
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate(-1)}
        >
          ← Go Back
        </button>

        <div className="text-end">
          <h4 className="mb-0 fw-semibold">🩺 Add Doctor</h4>
          <small className="text-muted">Create a new doctor profile</small>
        </div>
      </div>

      {/* FORM CARD */}
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <div className="row g-4">
            {/* LEFT COLUMN */}
            <div className="col-md-6">
              <InputForm label="Name" value={name} setValue={setName} />
            </div>

            <div className="col-md-6">
              <InputForm label="Degree" value={degree} setValue={setDegree} />
            </div>

            <div className="col-md-6">
              <InputSelect
                label="Speciality"
                value={speciality}
                setValue={setSpeciality}
                options={[
                  "Select Speciality",
                  "Cardiologist",
                  "Dermatologist",
                  "Neurologist",
                  "Orthopedic",
                  "Pediatrician",
                  "Gynecologist",
                  "ENT Specialist",
                  "Psychiatrist",
                  "Dentist",
                  "Ophthalmologist",
                  "Urologist",
                  "Gastroenterologist",
                  "General Physician",
                  "Pulmonologist",
                  "Endocrinologist",
                  "Nephrologist",
                  "Oncologist",
                ]}
              />
            </div>

            <div className="col-md-6">
              <InputForm
                label="Experience (Years)"
                value={experience}
                setValue={setExperience}
                type="number"
              />
            </div>

            <div className="col-md-6">
              <InputForm
                label="Fees"
                value={fees}
                setValue={setFees}
                type="number"
              />
            </div>

            <div className="col-md-6">
              <InputSelect
                label="Gender"
                value={gender}
                setValue={setGender}
                options={["Male", "Female", "Other"]}
              />
            </div>

            <div className="col-md-6">
              <InputForm
                label="Email"
                value={email}
                setValue={setEmail}
                type="email"
              />
            </div>

            <div className="col-md-6">
              <InputForm
                label="Phone"
                value={phone}
                setValue={setPhone}
                type="tel"
              />
            </div>

            <div className="col-md-12">
              <InputForm
                label="Address"
                value={address}
                setValue={setAddress}
              />
            </div>

            <div className="col-md-12">
              <InputForm label="About" value={about} setValue={setAbout} />
            </div>

            <div className="col-md-6">
              <InputForm
                label="Date of Birth"
                value={dob}
                setValue={setDob}
                inputType="date"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="form-control"
              />
            </div>
          </div>

          {/* ACTION BUTTON */}
          <div className="d-flex justify-content-end mt-4">
            <button className="btn btn-primary px-4" onClick={handleAddDoctor}>
              Add Doctor
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddDoctor;
