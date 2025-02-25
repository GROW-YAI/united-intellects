require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const connectDB = require("./db");

// Initialize Express app
const app = express();
app.use(express.json());

// ✅ Allow both localhost & production frontend URLs
const FRONTEND_URLS = [
  "http://localhost:5173",  // Local development
  "https://united-intellectuals.netlify.app", // Production
];

app.use(
  cors({
    origin: FRONTEND_URLS,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Create HTTP server
const server = http.createServer(app);

// Initialize WebSocket Server
const io = new Server(server, {
  cors: {
    origin: FRONTEND_URLS,
    methods: ["GET", "POST"],
  },
});

// Health check route
app.get("/", (req, res) => res.send("Chat server is running!"));

// Connect to MongoDB
connectDB();

// Define Chat Schema & Model
const chatSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const ChatMessage = mongoose.model("ChatMessage", chatSchema);

// ✅ Get previous messages
app.get("/messages", async (req, res) => {
  try {
    const messages = await ChatMessage.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// ✅ Send a message via API
app.post("/sendMessage", async (req, res) => {
  try {
    const { sender, content } = req.body;
    if (!content) return res.status(400).json({ error: "Message content is required" });

    const newMessage = new ChatMessage({ sender: sender || "Anonymous", message: content });
    await newMessage.save();

    io.emit("receiveMessage", newMessage);
    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ WebSocket Handling
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Send previous messages to the new user
  ChatMessage.find().sort({ timestamp: 1 }).then((messages) => socket.emit("previousMessages", messages));

  // Handle incoming messages
  socket.on("sendMessage", async (data) => {
    try {
      if (!data.content) return;

      const newMessage = new ChatMessage({ sender: data.sender || "Anonymous", message: data.content });
      await newMessage.save();

      io.emit("receiveMessage", newMessage);
    } catch (error) {
      console.error("Error processing WebSocket message:", error);
    }
  });

  socket.on("disconnect", () => console.log(`User disconnected: ${socket.id}`));
});

// ✅ Start the server
const PORT = process.env.CHAT_PORT || 5001;
server.listen(PORT, () => console.log(`🔥 Chat server running on port ${PORT}`));
