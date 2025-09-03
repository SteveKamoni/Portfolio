require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://<your-vercel-site>.vercel.app", // <-- I will replace this exact domain later
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// API routes
const formRoutes = require("./routes/formRoutes");
app.use("/api/form", formRoutes);

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
