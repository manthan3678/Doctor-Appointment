import React from "react";
import "./facility.css";
import FacilityData from "./facility-data.json";
const Facility = () => {
  // console.log(FacilityData)
  return (
    <>
      <h2 className="facilityHeadig">Facilities</h2>
        {" "}
        <div className="facility-container">
          {FacilityData.map((d, i) => (
            <div className="card" key={i}>
              <i className={`${d.icon} card-img-top`}></i>
              <div className="card-body">
                <h5 className="card-title">{d.title}</h5>
              </div>
            </div>
          ))}
        </div>
      
    </>
  );
};

export default Facility;
