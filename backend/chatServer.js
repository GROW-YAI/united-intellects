// Backend (server.js)
require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const connectDB = require("./db");

const app = express();
app.use(express.json()); 
app.use(cors({ origin: "https://united-intellectuals.netlify.app", methods: ["GET", "POST"] }));

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "https://united-intellectuals.netlify.app" }
});

// Health check
app.get("/", (req, res) => res.send("Chat server is running!"));

// Connect to MongoDB
connectDB();

// Chat Schema
const chatSchema = new mongoose.Schema({ sender: String, message: String, timestamp: { type: Date, default: Date.now } });
const ChatMessage = mongoose.model("ChatMessage", chatSchema);

// Get previous messages
app.get("/messages", async (req, res) => {
  try {
    const messages = await ChatMessage.find().sort({ timestamp: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// Send a message via API
app.post("/sendMessage", async (req, res) => {
  try {
    const { sender, content } = req.body;
    if (!content) return res.status(400).json({ error: "Message content is required" });
    const newMessage = new ChatMessage({ sender: sender || "Anonymous", message: content });
    await newMessage.save();
    io.emit("receiveMessage", newMessage);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// WebSocket Handling
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  ChatMessage.find().sort({ timestamp: 1 }).then((messages) => socket.emit("previousMessages", messages));

  socket.on("sendMessage", async (data) => {
    if (!data.content) return;
    const newMessage = new ChatMessage({ sender: data.sender || "Anonymous", message: data.content });
    await newMessage.save();
    io.emit("receiveMessage", newMessage);
  });

  socket.on("disconnect", () => console.log(`User disconnected: ${socket.id}`));
});

// Start server
const PORT = process.env.CHAT_PORT || 5001;
server.listen(PORT, () => console.log(`Chat server running on port ${PORT}`));