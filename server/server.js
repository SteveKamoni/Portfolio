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
      "http://localhost:5173", // Vite dev server
      "http://localhost:3000", // CRA dev server
      "https://buildsbysteve.vercel.app", // Production frontend
    ].filter(Boolean),
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Added OPTIONS
    allowedHeaders: ["Content-Type", "Authorization"], // Added Authorization just in case
    credentials: true, // If you're using cookies/auth
  })
);

// Handle preflight requests explicitly
app.options("*", cors());

// Logging middleware for debugging
app.use((req, res, next) => {
  console.log(`\n[${new Date().toISOString()}]`);
  console.log(`Method: ${req.method}`);
  console.log(`Path: ${req.path}`);
  console.log(`Origin: ${req.headers.origin}`);
  console.log(`Headers:`, req.headers);
  next();
});

// Middleware
app.use(express.json());

// Add a test route to verify CORS is working
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "CORS is configured" });
});

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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
