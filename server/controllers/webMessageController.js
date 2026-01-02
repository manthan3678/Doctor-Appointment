import webMessage from "../models/webMessages.js";

// create message
export const createMessage = async (req, res) => {
  try {
    const { name, contact, message } = req.body;

    if (!name || !contact || !message) {
      return res.status(402).send({
        success: false,
        message: "Please Provide All Details",
      });
    }

    const webmessageVar = await new webMessage({ name, contact, message });
    webmessageVar.save();
    res.status(201).send({
      success: true,
      message: "Your Message Sent SuccessFully",
      webmessageVar,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create Web Message",
    });
  }
};

// get all message
export const getAllMessage = async (req, res) => {
  try {
    const webmessages = await webMessage.find({});
    res.status(201).send({
      success: true,
      message: "Message Get SuccessFully",
      totalCount: webmessages.length,
      webmessages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get Message",
    });
  }
};
// delete message
export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status().send({
        success: false,
        message: "Provide Message Id",
      });
    }
    const webmessage = await webMessage.findByIdAndDelete(id);

    res.status(201).send({
      success: true,
      message: "Message Deleted SuccessFully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Delete Message",
    });
  }
};
