import nodemailer from "nodemailer";

const sendEmail = async (fullname, email, message) => {
  try {
    const { YOUR_EMAIL, YOUR_EMAIL_APP_PASSWORD } = process.env;

    if (!YOUR_EMAIL || !YOUR_EMAIL_APP_PASSWORD) {
      throw new Error("Missing environment variables for email credentials.");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: YOUR_EMAIL,
        pass: YOUR_EMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: YOUR_EMAIL,
      to: YOUR_EMAIL,
      subject: "New message from your portfolio website",
      text: `
        Name: ${fullname}
        Email: ${email}
        Message: ${message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error during sending email:", error);
  }
};

export default sendEmail;
