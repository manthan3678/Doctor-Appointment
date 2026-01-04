import appointmentModel from "../models/appointmentModel.js";
import doctorModel from "../models/doctorModel.js";
import userModel from "../models/userModel.js";

// create appointment
export const bookAppointment = async (req, res) => {
  try {
    const { userId, doctorId, slottime, slotdate, amount } = req.body;
    if (!userId || !doctorId || !slotdate || !slottime || !amount) {
      res.status(404).send({
        success: false,
        message: "Provide All Values",
        error,
      });
    }

    const appointment = new appointmentModel({
      userId,
      doctorId,
      slottime,
      slotdate,
      amount,
    });
    await appointment.save();
    res.status(201).send({
      success: true,
      message: "Appointment Booked Successfully",
      appointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong Booking Appointment",
      error,
    });
  }
};
// get all appointment
export const getAllAppointment = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({});

    res.status(200).send({
      success: true,
      message: "All Appointments Get",
      totalAppointment: appointments.length,
      appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong getting all Appointment",
      error,
    });
  }
};
// get appointment details
export const getAppointmentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).send({
        success: false,
        message: "please provide appointment id",
      });
    }
    const appointment = await appointmentModel.findById(id);
    if (!appointment) {
      res.status(404).send({
        success: false,
        message: "No appointment find with this id",
      });
    }
    //   find user and doctor
    const user = await userModel.findOne({ _id: appointment?.userId });
    const doctor = await doctorModel.findOne({ _id: appointment?.doctorId });

    res.status(200).send({
      success: true,
      message: "Appoitment Details Fetched ",
      appointmentDetails: {
        clientName: user?.name,
        clientPhone: user?.phone,
        clientEmail: user?.email,
        doctorName: doctor?.name,
        doctorPhone: doctor?.phone,
        doctorEmail: doctor?.email,
        bookingDate: appointment?.slotdate,
        bookingTime: appointment?.slottime,
        amount: appointment?.amount,
        bookingStatus: appointment?.status,
        paymentMode: appointment?.payment,
        createdAt: appointment?.createdAt,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong getting appointment details",
      error,
    });
  }
};
// status change
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).send({
        success: false,
        message: "please provide appointment id",
      });
    }
    const { appointmentStatus } = req.body;
    if (!appointmentStatus) {
      res.status(404).send({
        success: false,
        message: "please provide appointment status",
      });
    }
    const appointment = await appointmentModel.findByIdAndUpdate(
      id,
      { $set: { status: appointmentStatus } },
      { returnOriginal: false }
    );
    res.status(200).send({
      success: true,
      message: "Updated Appointment Status",
      appointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Updating Status",
      error,
    });
  }
};
// user appointment
export const getUserAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).send({
        success: false,
        message: "please provide appointment id",
      });
    }
    const user = await userModel.findById(id);
    if (!user) {
      res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
    const appointment = await appointmentModel.find({ userId: user?._id });
    res.status(200).send({
      success: true,
      message: "User Appointment Found",
      totalAppointment: appointment.length,
      appointment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Getting User Appointment",
      error,
    });
  }
};
// get user appointment details
export const getUserAppointmentDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).send({
        success: false,
        message: "please provide appointment id",
      });
    }
    const user = await userModel.findById(id);
    if (!user) {
      res.status(404).send({
        success: false,
        message: "No user found with this id",
      });
    }
    const appointment = await appointmentModel.findOne({ userId: user?._id });
    //   find user and doctor
    const doctor = await doctorModel.findOne({ _id: appointment?.doctorId });

    res.status(200).send({
      success: true,
      message: "User Appoitment Details Fetched ",
      appointmentDetails: {
        doctorName: doctor?.name,
        doctorPhone: doctor?.phone,
        doctorEmail: doctor?.email,
        bookingDate: appointment?.slotdate,
        bookingTime: appointment?.slottime,
        amount: appointment?.amount,
        bookingStatus: appointment?.status,
        paymentMode: appointment?.payment,
        createdAt: appointment?.createdAt,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In User appointment details",
      error,
    });
  }
};

// update user booking status
export const cancelAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).send({
        success: false,
        message: "please provide appointment id",
      });
    }
    const appointment = await appointmentModel.findById(id);
    if (!appointment) {
      res.status(404).send({
        success: false,
        message: "no appointment found with this id",
      });
    }
    await appointment.updateOne({ $set: { status: "cancel" } });
    res.status(200).send({
      success: true,
      message: "Appointment Cancel",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Cancel appointment details",
      error,
    });
  }
};
