const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

env = require("dotenv").config();
const app = express();

// Middleware
app.use(
  cors({
    origin: ["https://united-intellectuals.netlify.app/"], // Replace with your actual Netlify URL
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(bodyParser.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// MongoDB Schema
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

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const CLIENT_EMAIL = process.env.CLIENT_EMAIL;

// POST endpoint to handle form submissions
app.post("/contact", async (req, res) => {
  console.log("Incoming request from:", req.headers.origin);
  console.log("Request Body:", req.body);
  const { fullName, email, phone, address, subject, message } = req.body;

  if (!fullName || !email || !message) {
    console.log("Missing required fields");
    return res.status(400).json({ error: "Full name, email, and message are required" });
  }

  try {
    // Save form data to MongoDB
    const newContact = new Contact({ fullName, email, phone, address, subject, message });
    await newContact.save();
    console.log("Data saved to MongoDB");

    // Email to your client (the website owner)
    const ownerMailOptions = {
      from: email,
      to: CLIENT_EMAIL,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    await transporter.sendMail(ownerMailOptions);
    console.log("Email sent to website owner");

    // Confirmation email to the sender
    const clientMailOptions = {
      from: "no-reply@yourdomain.com",
      to: email,
      subject: `Thank you for contacting us, ${fullName}`,
      text: `
        Dear ${fullName},

        Thank you for reaching out! We have received your message and will get back to you shortly.

        Your Message:
        ------------------------
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Subject: ${subject}
        Message: ${message}
        ------------------------

        Best regards,
        United-Intellects
      `,
    };

    await transporter.sendMail(clientMailOptions);
    console.log("Confirmation email sent to client");

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to send the message. Please try again." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

