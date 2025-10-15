import React from "react";
import "./PatientReview.css";
import PatientData from "./PatientReview.json";
const PatientReview = () => {
  return (
    <>
      <div className="review-container">
        <div className="heading-container">
          <p>Testimonial</p>
          <h1>What Our Patients</h1>
          <h1>Says About us.</h1>
        </div>
        {/* reviews */}
        <div className="row why-container">
          {PatientData.map((d) => (
            <div className="col-md-3" key={d.id}>
              <img src={d.pic} alt="userpic" width={"100px"} />
              <p className="">
                <span className="lh-base text-uppercase">{d.name}</span> <br />{" "}
                {d.address}
              </p>
              <div className="d-flex flex-row p-2">
                <h6 className="icon mb-0">
                  <span className="fas fa-star active-star"></span>
                  <span className="fas fa-star active-star"></span>
                  <span className="fas fa-star active-star"></span>
                  <span className="fas fa-star active-star"></span>
                  <span className="fas fa-star-half-alt active-star"></span>
                </h6>
              </div>
              <h4 className="my-2">{d.commentTile}</h4>
              <p className="text-capitalize lh-base">{d.commentDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PatientReview;
