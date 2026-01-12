import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDoctorDetails,
  updateDoctor,
} from "../../redux/actions/doctorAction";
import InputForm from "../../components/forms/InputForm";
import InputSelect from "../../components/forms/InputSelect";
import toast from "react-hot-toast";
import { resetStatus } from "../../redux/slice/doctorSlice";

const DoctorDetails = () => {
  const { id } = useParams();

  const disptach = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    disptach(getDoctorDetails(id));
  }, [disptach, id]);

  const { doctor, loading, updateSuccess, error } = useSelector(
    (state) => state.doctor
  );
  const [edit, setEdit] = useState(false);

  const [name, setName] = useState(doctor?.name);
  const [about, setAbout] = useState(doctor?.about);
  const [degree, setDegree] = useState(doctor?.degree);
  const [speciality, setSpeciality] = useState(doctor?.speciality);
  const [experience, setExperience] = useState(doctor?.experience);
  const [fees, setFees] = useState(doctor?.fees);
  const [email, setEmail] = useState(doctor?.email);
  const [image, setImage] = useState(doctor?.image);
  const [phone, setPhone] = useState(doctor?.phone);
  const [address, setAddress] = useState(doctor?.address);
  const [dob, setDob] = useState(doctor?.dob);
  const [gender, setGender] = useState(doctor?.gender);
  useEffect(() => {
    if (doctor) {
      setName(doctor.name || "");
      setAbout(doctor.about || "");
      setDegree(doctor.degree || "");
      setSpeciality(doctor.speciality || "");
      setExperience(doctor.experience || "");
      setFees(doctor.fees || "");
      setEmail(doctor.email || "");
      setPhone(doctor.phone || "");
      setAddress(doctor.address || "");
      setDob(doctor.dob || "");
      setGender(doctor.gender || "");
      setImage(doctor.image || null);
    }
  }, [doctor]);

  const handleUpdate = () => {
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
    if (image instanceof File) {
      formData.append("image", image);
    }
    disptach(updateDoctor({ id, formData }));
  };
  useEffect(() => {
    if (updateSuccess) {
      toast.success("Doctor Details Updated");
      disptach(resetStatus());
      navigate("/all-doctors");
    }

    if (error) {
      toast.error(error);
    }
  }, [updateSuccess, error, navigate]);

  const handleDelete = () => {};
  return (
    <Layout>
      {/* HEADER */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        {/* LEFT ACTIONS */}
        <div className="d-flex align-items-center gap-2">
          <button
            className={`btn ${edit ? "btn-outline-secondary" : "btn-primary"}`}
            onClick={() => setEdit(!edit)}
          >
            {edit ? "Cancel" : "Edit"}
          </button>

          <button
            className="btn btn-outline-danger"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>

        {/* RIGHT TITLE */}
        <div className="d-flex align-items-center gap-3">
          {/* Doctor Image */}
          <img
            src={`data:image/jpeg;base64,${doctor?.image}`}
            alt="doctor"
            width={48}
            height={48}
            className="rounded-circle border object-fit-cover"
          />

          {/* Doctor Info */}
          <div className="text-end">
            <h5 className="mb-0 fw-semibold">{doctor?.name}</h5>
            <small className="text-muted">Doctor Profile</small>
          </div>
        </div>
      </div>

      {loading || !doctor || doctor?._id !== id ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "65vh" }}
        >
          <div className="text-center">
            <div className="spinner-border text-primary mb-3" role="status" />
            <div className="fw-semibold text-muted">
              Loading doctor details...
            </div>
          </div>
        </div>
      ) : (
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <div className="row g-4">
              {/* LEFT COLUMN */}
              <div className="col-md-6">
                <InputForm
                  label="Name"
                  value={name}
                  setValue={setName}
                  disabled={!edit}
                />
              </div>

              <div className="col-md-6">
                <InputForm
                  label="Degree"
                  value={degree}
                  setValue={setDegree}
                  disabled={!edit}
                />
              </div>

              <div className="col-md-6">
                <InputSelect
                  label="Speciality"
                  value={speciality}
                  disabled={!edit}
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
                  disabled={!edit}
                />
              </div>

              <div className="col-md-6">
                <InputForm
                  label="Fees"
                  value={fees}
                  setValue={setFees}
                  type="number"
                  disabled={!edit}
                />
              </div>

              <div className="col-md-6">
                <InputSelect
                  label="Gender"
                  value={gender}
                  setValue={setGender}
                  options={["Male", "Female", "Other"]}
                  disabled={!edit}
                />
              </div>

              <div className="col-md-6">
                <InputForm
                  label="Email"
                  value={email}
                  setValue={setEmail}
                  type="email"
                  disabled={!edit}
                />
              </div>

              <div className="col-md-6">
                <InputForm
                  label="Phone"
                  value={phone}
                  setValue={setPhone}
                  type="tel"
                  disabled={!edit}
                />
              </div>

              <div className="col-md-12">
                <InputForm
                  label="Address"
                  value={address}
                  setValue={setAddress}
                  disabled={!edit}
                />
              </div>

              <div className="col-md-12">
                <InputForm
                  label="About"
                  value={about}
                  setValue={setAbout}
                  disabled={!edit}
                />
              </div>

              <div className="col-md-6">
                <InputForm
                  label="Date of Birth"
                  value={dob}
                  setValue={setDob}
                  inputType="date"
                  disabled={!edit}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Profile Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="form-control"
                  disabled={!edit}
                />
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div className="d-flex justify-content-end mt-4">
              <button className="btn btn-primary px-4" onClick={handleUpdate}>
                Update Doctor
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DoctorDetails;
