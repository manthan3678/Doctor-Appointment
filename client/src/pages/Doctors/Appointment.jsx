import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DoctorData from "./Doctor.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorDetails } from "../../redux/actions/doctorAction";

const Appointment = () => {
  const { id } = useParams();
  const [docinfo, setDocinfo] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctorDetails(id));
  }, [dispatch, id]);
  const { doctor } = useSelector((state) => state.doctor);
  // // find doctors
  // const findDocInfo = async () => {
  //   let docInfo = DoctorData.find((doc) => doc.id == id);
  //   setDocinfo(docInfo);
  //   console.log(docInfo);
  // };
  useEffect(() => {
    if (doctor) {
      setDocinfo(doctor);
    }
  }, [doctor]);
  return (
    <>
      <div className="container py-5 appointment_container">
        <div className="row justify-content-center g-4">
          {/* Doctor Profile */}
          <div className="col-lg-4">
            <div className="card shadow-sm border-0 text-center h-100">
              <div className="card-body">
                <img
                  src={`data:image/jpeg;base64,${docinfo?.image}`}
                  alt="Doctor"
                  className="rounded-circle mb-3 doctor-img"
                />

                <h5 className="fw-bold mb-1">{docinfo?.name}</h5>
                <p className="text-muted mb-2">{docinfo?.degree}</p>

                <span
                  className={`badge px-3 py-2 ${
                    docinfo?.available ? "bg-success" : "bg-danger"
                  }`}
                >
                  {docinfo?.available ? "Available" : "Not Available"}
                </span>

                <hr />

                <p className="mb-1">
                  <strong>Experience:</strong> {docinfo?.experience} Years
                </p>

                <p className="text-muted small">{docinfo?.about}</p>

                <h6 className="mt-3 text-primary fw-bold">
                  Consultation Fee: ₹{docinfo?.fees}
                </h6>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-header bg-white border-0">
                <h4 className="fw-bold mb-0">Book Appointment</h4>
                <p className="text-muted mb-0">
                  Select your preferred date & time
                </p>
              </div>

              <div className="card-body">
                <label className="fw-semibold mb-2">
                  Appointment Date & Time
                </label>

                <DatePicker
                  className="form-control form-control-lg"
                  minDate={new Date()}
                  selected={selectedDateTime}
                  onChange={(date) => setSelectedDateTime(date)}
                  showTimeSelect
                  timeFormat="h:mm aa"
                  timeIntervals={30}
                  dateFormat="d MMM yyyy, h:mm aa"
                  timeCaption="Time"
                  minTime={setHours(setMinutes(new Date(), 0), 9)}
                  maxTime={setHours(setMinutes(new Date(), 0), 22)}
                />

                <small className="text-muted d-block mt-2">
                  Selected: {selectedDateTime?.toLocaleString()}
                </small>

                <button
                  className="btn btn-primary btn-lg w-100 mt-4"
                  disabled={!docinfo?.available}
                >
                  {docinfo?.available
                    ? "Confirm Appointment"
                    : "Doctor Not Available"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
