import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllAppointment } from "../../redux/actions/appoitmentAction";

const AllAppointments = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    disptach(getAllAppointment());
  }, [disptach]);
  const { appointments } = useSelector((state) => state.appointments);
  return (
    <Layout>
      <h1>All Appointment</h1>
      <table className="table">
        <thead>
          <tr>
            <th>SN</th>
            <th>ID</th>
            <th>DATE</th>
            <th>AMOUNT</th>
            <th>STATUS</th>
            {/* <th>PAYMENT</th> */}
            <th>EDIT</th>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((app, i) => (
            <tr key={i + 1}>
              <td>{i + 1}</td>
              <td>{app?._id}</td>
              <td>{app?.slotdate}</td>
              <td>{app?.amount}</td>
              <td>{app?.status}</td>
              {/* <td>{app?.payment}</td> */}
              <td>
                <Link to={`/appointment-details/${app?._id}`}>view</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default AllAppointments;
