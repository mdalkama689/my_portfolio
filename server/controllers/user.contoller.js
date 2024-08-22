import sendEmail from "../utils/sendEmail.js";
import nodemailer from "nodemailer";

const sendMessage = async (req, res, next) => {
  try {
    let { fullname, email, message } = req.body;

    fullname = fullname?.trim();
    email = email?.trim();
    message = message?.trim();

    if (!fullname || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all fields." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    await sendEmail(fullname, email, message);

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(`Error in sendMessage: ${error.message}`);
    res.status(500).json({
      success: false,
      message: "An error occurred while sending the message.",
    });
  }
};

export default sendMessage;
