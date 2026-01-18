import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentDetails } from "../../redux/actions/appoitmentAction";
import { useParams } from "react-router-dom";

const AppointmentDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [appointmentStatus, setAppointmentStatus] = useState("");

  useEffect(() => {
    dispatch(getAppointmentDetails(id));
  }, [dispatch, id]);

  const { appointment, loading } = useSelector((state) => state.appointments);

  useEffect(() => {
    if (appointment) {
      setAppointmentStatus(appointment?.bookingStatus);
    }
  }, [appointment]);

  return (
    <Layout>
      <div className="container py-4">
        {/* HEADER */}
        <div className="mb-4">
          <h4 className="fw-bold mb-1">Appointment Details</h4>
          <p className="text-muted mb-0">
            Complete information about this appointment
          </p>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" />
            <p className="mt-2 text-muted">Loading appointment...</p>
          </div>
        ) : (
          <div className="row g-4">
            {/* PATIENT INFO */}
            <div className="col-md-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-header bg-light fw-semibold">
                  Patient Information
                </div>
                <div className="card-body">
                  <InfoRow label="Name" value={appointment?.clientName} />
                  <InfoRow label="Email" value={appointment?.clientEmail} />
                </div>
              </div>
            </div>

            {/* DOCTOR INFO */}
            <div className="col-md-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-header bg-light fw-semibold">
                  Doctor Information
                </div>
                <div className="card-body">
                  <InfoRow label="Name" value={appointment?.doctorName} />
                  <InfoRow label="Phone" value={appointment?.doctorPhone} />
                  <InfoRow label="Email" value={appointment?.doctorEmail} />
                </div>
              </div>
            </div>

            {/* APPOINTMENT INFO */}
            <div className="col-12">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-light fw-semibold">
                  Appointment Details
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <InfoRow
                        label="Booking Date"
                        value={appointment?.bookingDate}
                      />
                    </div>
                    <div className="col-md-4">
                      <InfoRow
                        label="Booking Time"
                        value={appointment?.bookingTime}
                      />
                    </div>
                    <div className="col-md-4">
                      <InfoRow
                        label="Amount"
                        value={`₹ ${appointment?.amount}`}
                      />
                    </div>
                  </div>

                  {/* STATUS */}
                  <div className="mt-3">
                    <span className="fw-semibold me-2">Status:</span>
                    <span
                      className={`badge rounded-pill px-3 py-2 ${
                        appointmentStatus === "confirmed"
                          ? "bg-success"
                          : appointmentStatus === "cancelled"
                          ? "bg-danger"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {appointmentStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

/* SMALL REUSABLE ROW */
const InfoRow = ({ label, value }) => (
  <div className="d-flex justify-content-between mb-2">
    <span className="text-muted">{label}</span>
    <span className="fw-semibold">{value || "-"}</span>
  </div>
);

export default AppointmentDetails;
