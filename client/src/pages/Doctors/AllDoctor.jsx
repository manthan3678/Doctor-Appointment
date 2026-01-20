import React, { useEffect } from "react";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctor } from "../../redux/actions/doctorAction";
import "./Alldoctor.css";

const AllDoctor = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDoctor());
  }, [dispatch]);

  const { doctors } = useSelector((state) => state.doctor);

  return (
    <div className="container my-5">
      <h3 className="text-center text-success fw-bold mb-4">
        Select A Doctor And Book An Appointment Now
      </h3>

      <div className="row g-4 justify-content-center">
        {doctors?.map((d) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={d._id}>
            <NavLink
              to={`/doctors/${d._id}`}
              className="text-decoration-none text-dark"
            >
              <div className="card doctor-card h-100 text-center">
                <div className="doctor-img-wrapper">
                  <img
                    src={`data:image/jpeg;base64,${d?.image}`}
                    alt="Doctor"
                    className="doctor-img"
                  />
                </div>

                <div className="card-body">
                  <h6 className="fw-bold mb-1">{d.name}</h6>
                  <p className="text-muted small mb-2">{d.degree}</p>
                </div>

                <div className="card-footer bg-white border-0 pb-3">
                  <span className="badge bg-success-subtle text-success px-3 py-2">
                    <i className={`${d.icon} me-1`}></i>
                    {d.speciality}
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDoctor;
