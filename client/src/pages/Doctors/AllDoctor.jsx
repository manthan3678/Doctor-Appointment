import React from "react";
import DoctorData from "./Doctor.json";
import { NavLink } from "react-router";
import "./Alldoctor.css";

const AllDoctor = () => {
  return (
    <>
      <div className="container doc-container">
        <h4 className="text-center text-success my-3">
          Select A Doctor And Book An Appointment Now
        </h4>
        {DoctorData.map((d) => (
          <div className="card" key={d.id} style={{ width: "15rem" }}>
            <NavLink to={`/doctors/${d.id}`}>
              <img
                src={d.pic}
                alt="Doctor Picture"
                width={150}
                height={150}
                className="card-image-top"
              />

              <div className="card-body">
                <h6>{d.name}</h6>
                <p>{d.degree}</p>
              </div>
              <div className="card-footer">
                <p>
                  {" "}
                  <i className={d.icon}></i>
                  {d.speciality}
                </p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllDoctor;
