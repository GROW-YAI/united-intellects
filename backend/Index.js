const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Replace with your OpenAI API endpoint and key
const AI_API_URL = "https://api.openai.com/v1/chat/completions";
const AI_API_KEY = "sk-your-openai-api-key"; // Replace with your actual API key

// Contact Form Endpoint
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill out all fields." });
  }

  // Simulate saving to a database or sending an email
  console.log("Contact Form Submission:");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  res.json({ success: true, message: "Thank you for contacting us!" });
});

// Chat Endpoint
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    // Call the OpenAI API
    const response = await axios.post(
      AI_API_URL,
      {
        model: "gpt-3.5-turbo", // Use the GPT-3.5 model
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${AI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Extract the AI's reply
    const botMessage = response.data.choices[0].message.content;
    res.json({ reply: botMessage });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    res.status(500).json({ reply: "Error fetching response" });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});