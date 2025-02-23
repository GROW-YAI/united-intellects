const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const MONGO_URI = "mongodb+srv://admin:Adjola12%2E%2C@cluster0.8vm0z.mongodb.net/contact-form?retryWrites=true&w=majority"; // Replace with your MongoDB connection string
mongoose
  .connect(MONGO_URI)
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

// Nodemailer Configuration (Optional)
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service (e.g., Gmail, Outlook)
  auth: {
    user: "felixatoma2@gmail.com", // Replace with your email
    pass: "idzf ugsb bbcv enkv", // Replace with your app password
  },
});

// POST endpoint to handle form submissions
app.post("/contact", async (req, res) => {
  console.log("Request Body:", req.body); // Log the request body
  const { fullName, email, phone, address, subject, message } = req.body;

  if (!fullName || !email || !message) {
    console.log("Missing required fields"); // Log missing fields
    return res.status(400).json({ error: "Full name, email, and message are required" });
  }

  try {
    // Save form data to MongoDB
    const newContact = new Contact({ fullName, email, phone, address, subject, message });
    await newContact.save();
    console.log("Data saved to MongoDB"); // Log success

    // Send email notification (Optional)
    const mailOptions = {
      from: "felixatoma2@gmail.com", // Replace with your email
      to: "obaaelie@gmail.com", // Replace with your client's email
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully"); // Log success

    // Respond to the client
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error:", error); // Log the error
    res.status(500).json({ error: "Failed to send the message. Please try again." });
  }
});

// Start the server
const PORT = process.env.PORT || 5000; // Use environment variable or default to 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});