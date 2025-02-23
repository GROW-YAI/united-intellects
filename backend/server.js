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
const MONGO_URI = "mongodb+srv://admin:Adjola12%2E%2C@cluster0.8vm0z.mongodb.net/contact-form?retryWrites=true&w=majority";
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

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "felixatoma2@gmail.com", // Your email
    pass: "idzf ugsb bbcv enkv", // Your app password
  },
});

const CLIENT_EMAIL = "yeboahmartin733@gmail.com"; // Your client's email

// POST endpoint to handle form submissions
app.post("/contact", async (req, res) => {
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
      from: email, // Use sender's email
      to: CLIENT_EMAIL, // Only the owner receives it
      bcc: "", // Ensure no hidden copies are sent
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
      from: "no-reply@yourdomain.com", // Use a no-reply email
      to: email, // Send confirmation to the sender
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

    // Respond to the client
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

