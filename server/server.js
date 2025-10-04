// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

// VERY PERMISSIVE CORS FOR DEBUGGING - We'll restrict it later
app.use(
  cors({
    origin: true, // Allow all origins temporarily
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Handle preflight
app.options("*", cors());

// Middleware
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`\n[${new Date().toISOString()}]`);
  console.log(`${req.method} ${req.path}`);
  console.log(`Origin: ${req.headers.origin}`);
  next();
});

// Test route
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running",
    timestamp: new Date().toISOString(),
    cors: "enabled",
  });
});

// Routes
const formRoutes = require("./routes/formRoutes");
app.use("/api/form", formRoutes);

// Frontend is served separately on Vercel, so we don't need this
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/dist")));
//   app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
//   });
// }

// Error handling
app.use((err, req, res, next) => {
  console.error("ERROR:", err);
  res.status(500).json({ error: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n========================================`);
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🌐 CORS: ENABLED (permissive mode)`);
  console.log(`========================================\n`);
});
