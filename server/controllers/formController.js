const nodemailer = require("nodemailer");

exports.handleForm = async (req, res) => {
  const { name, email, message } = req.body;

  // Validate fields (basic)
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `New Portfolio Message from ${name}`,
    text: `\n      Name: ${name}\n      Email: ${email}\n      Message: ${message}\n    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Form submitted and email sent:", { name, email, message });
    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
};
