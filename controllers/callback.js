import nodemailer from "nodemailer";

export const receiveRequest = async (req, res) => {
  const { name, phone, time, comments } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "eshaanbagga@gmail.com",
      pass: process.env.PASS,
    },
  });

  // Setup email data with unicode symbols
  const mailOptions = {
    from: "eshaanbagga@gmail.com",
    to: "ravi@anchors.in",
    subject: "New Call Back Request from anchors app",
    text: `Call back request from ${name} with phone number ${phone}. They want to be called at ${time}. They have left the following comments: ${comments}`,
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json(error);
      console.log(error);
    }
    res.json(info);
    console.log(info);
  });
};
