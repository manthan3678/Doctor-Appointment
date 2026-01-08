import doctorModel from "../models/doctorModel.js";

// create/add dcotor
export const addDoctor = async (req, res) => {
  try {
    const {
      name,
      about,
      degree,
      speciality,
      experience,
      fees,
      email,
      image,
      phone,
      address,
      dob,
      gender,
      available,
    } = req.body;

    const photoBase64 = req.file && req.file.buffer.toString("base64");
    if (
      !name ||
      !about ||
      !degree ||
      !speciality ||
      experience === undefined ||
      fees === undefined ||
      !email ||
      !phone ||
      !address ||
      !dob ||
      !gender ||
      !photoBase64
    ) {
      return res.status(400).send({
        success: false,
        message: "Provide all the details",
      });
    }
    const doctorData = {
      name,
      about,
      degree,
      speciality,
      experience,
      fees,
      email,
      image: photoBase64,
      phone,
      address,
      dob,
      gender,
      available,
    };
    const doctor = new doctorModel(doctorData);
    await doctor.save();
    res.status(200).send({
      success: true,
      message: "Doctor Profile Created",
      doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  creating doctor profile",
      error,
    });
  }
};
//  get all doctor
export const getAllDoctor = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    res.status(200).send({
      success: true,
      message: "Got Doctor's Data",
      totalCount: doctors.length,
      doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Getting Doctor Data",
      error,
    });
  }
};
// get single doc details
export const getSingleDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).send({
        success: false,
        message: "Please add doctor id",
        doctor,
      });
    }
    const doctor = await doctorModel.findById(id);
    if (!doctor) {
      res.status(404).send({
        success: false,
        message: "No doctor found with this id",
        doctor,
      });
    }
    res.status(200).send({
      success: true,
      message: "Got Single Doctor Data",
      doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Getting Single Doctor Data",
      error,
    });
  }
};
// update doc details
export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).send({
        success: false,
        message: "Please add doctor id",
        doctor,
      });
    }
    const data = req.body;
    const photoBase64 = req.file && req.file.buffer.toString("base64");
    const doctor = await doctorModel.findByIdAndUpdate(
      id,
      { $set: data },
      { returnOriginal: false }
    );
    res.status(200).send({
      success: true,
      message: "Doctor Data Updated",
      doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in updating doctor data",
      error,
    });
  }
};
// delete doc data
export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).send({
        success: false,
        message: "Please add doctor id",
        doctor,
      });
    }
    await doctorModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Doctor Data Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in deleting doctor data",
      error,
    });
  }
};
// available status updte
export const updateAvailableStatus = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(404).send({
        success: false,
        message: "Please add doctor id",
        doctor,
      });
    }
    const { availableStatus } = req.body;
    if (!availableStatus) {
      res.status(404).send({
        success: false,
        message: "Please provide available status",
      });
    }
    const doctor = await doctorModel.findByIdAndUpdate(
      id,
      {
        $set: { available: availableStatus },
      },
      { returnOriginal: false }
    );

    res.status(200).send({
      success: true,
      message: "Doctot Available Status Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Updating Availability",
      error,
    });
  }
};
