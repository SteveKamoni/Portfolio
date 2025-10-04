const express = require("express");
const router = express.Router();
const { handleForm } = require("../controllers/formController");

// Logging middleware for debugging
router.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  console.log("Headers:", req.headers);
  console.log("Origin:", req.headers.origin);
  next();
});

// Explicitly handle OPTIONS for this route
router.options("/", (req, res) => {
  console.log("OPTIONS request received");
  res.sendStatus(200);
});

// POST /api/form
router.post("/", handleForm);

// Health check for this specific route
router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Form route is accessible",
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
