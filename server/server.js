// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

// CORS: allow local dev, and production domain later
app.use(
  cors({
    origin: [
      // "http://localhost:5173", // Vite dev server
      // "http://localhost:3000", // CRA dev server
      "https://buildsbysteve.vercel.app",
      // Production frontend
    ].filter(Boolean), // removes undefined if CLIENT_URL is not set
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Middleware
app.use(express.json());

// Routes
const formRoutes = require("./routes/formRoutes");
app.use("/api/form", formRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
  });
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
