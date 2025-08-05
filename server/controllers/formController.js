exports.handleForm = (req, res) => {
  const { name, email, message } = req.body;

  // Validate fields (basic)
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  // TODO: Save to DB or send email
  console.log("Form submitted:", { name, email, message });

  return res.status(200).json({ message: "Form submitted successfully" });
};
