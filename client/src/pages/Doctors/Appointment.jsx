import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DoctorData from "./Doctor.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";

const Appointment = () => {
  const { id } = useParams();
  const [docinfo, setDocinfo] = useState({});
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  // find doctors
  const findDocInfo = async () => {
    let docInfo = DoctorData.find((doc) => doc.id == id);
    setDocinfo(docInfo);
    console.log(docInfo);
  };
  useEffect(() => {
    findDocInfo();
  }, [id]);
  return (
    <>
      <div className="container docinfo-container">
        <div className="row m-3">
          <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
            <img src={docinfo?.pic} alt="" height={200} width={200} />
            <h6>{docinfo?.name}</h6>
            <h6
              className={`${
                docinfo?.available ? "text-success" : "text-danger"
              }`}
            >
              {docinfo?.available ? "Available" : "Not Available"}
            </h6>
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <h6>Experience : {docinfo?.experience}</h6>
            <p>{docinfo?.about}</p>
            <h5>Consultation Fee : {docinfo?.fee}</h5>
            {/* Date And Time */}
            <div className="date-time my-3">
              <h6 className="">Select Your Booking Date & Time : 👇 </h6>
              <DatePicker
                className="calender"
                minDate={new Date()}
                selected={selectedDateTime}
                onChange={(date) => setSelectedDateTime(date)}
                showTimeSelect
                timeFormat="h:mm aa"
                timeIntervals={30}
                dateFormat="d-MMM-yyyy h:mm aa"
                timeCaption="Time"
                minTime={new Date()}
                maxTime={setHours(setMinutes(new Date(), 2), 22)}
              />
              <p>
                {selectedDateTime
                  ? selectedDateTime.toLocaleString()
                  : "Please Select Date & Time"}
              </p>
            </div>
            <button
              className="btn btn-primary w-50"
              disabled={!docinfo?.available}
            >
              {docinfo?.available ? "Book Appoinment" : "Not Available"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
