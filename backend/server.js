require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const connectDB = require("./db");

const app = express();

// ✅ Allow CORS for Netlify & Localhost (Ensures the frontend can connect)
app.use(
  cors({
    origin: [
      "https://united-intellectuals.netlify.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true, // ✅ Allows credentials (if needed)
  })
);

app.use(bodyParser.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Health Check Route
app.get("/ping", (req, res) => {
  res.status(200).json({ message: "Backend is running!" });
});

// ✅ Contact Form Schema
const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  address: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// ✅ Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const CLIENT_EMAIL = process.env.CLIENT_EMAIL;

// ✅ Contact Form Submission Route
app.post("/contact", async (req, res) => {
  console.log("Incoming request from:", req.headers.origin);
  console.log("Request Body:", req.body);

  const { fullName, email, phone, address, subject, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: "Full name, email, and message are required" });
  }

  try {
    // ✅ Save data to MongoDB
    const newContact = new Contact({ fullName, email, phone, address, subject, message });
    await newContact.save();
    console.log("Data saved to MongoDB");

    // ✅ Send confirmation emails
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: CLIENT_EMAIL,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nSubject: ${subject}\nMessage: ${message}`,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting us, ${fullName}`,
      text: `Dear ${fullName},\n\nThank you for reaching out! We have received your message and will get back to you shortly.\n\nBest regards,\nUnited-Intellects`,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to send the message. Please try again." });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
