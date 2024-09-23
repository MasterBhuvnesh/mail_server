const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const corsOptions = {
  origin: ["https://masterbhuvnesh.github.io/", "http://localhost:3000"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  console.log("Received email data:", req.body);
  const { name, email, text_p } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
user: "bhuvneshverma2005@gmail.com",
pass: "rsbh egee zamk mixv"
    },
  });

  const mailOptions = {
    from: "bhuvneshverma2005@gmail.com",
    to: email,
    subject: `${name}, Thanks for your response`,
    text: `Your response  - ${text_p}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.status(500).send(error.toString());
    }
    console.log("Email Sent");
    return res.status(200).send({ message: "Email sent successfully" });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
