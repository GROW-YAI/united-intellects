const io = require("socket.io-client");

const socket = io("http://localhost:5001"); // Connect to WebSocket server

socket.on("connect", () => {
    console.log("✅ Connected to WebSocket server");
    socket.emit("sendMessage", { sender: "Felix", content: "Hello from client!" });
});

socket.on("receiveMessage", (message) => {
    console.log("📩 New message received:", message);
});

socket.on("disconnect", () => {
    console.log("❌ Disconnected from server");
});
