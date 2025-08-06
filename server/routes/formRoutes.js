const express = require("express");
const router = express.Router();
const { handleForm } = require("../controllers/formController");

// POST /api/form
router.post("/", handleForm);

module.exports = router;

// make changes to this
