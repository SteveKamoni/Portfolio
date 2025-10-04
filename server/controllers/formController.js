const nodemailer = require("nodemailer");

exports.handleForm = async (req, res) => {
  console.log("\n=== Form Submission Received ===");
  console.log("Body:", req.body);

  const { name, email, message } = req.body;

  // Validate fields
  if (!name || !email || !message) {
    console.log("Validation failed: Missing fields");
    return res.status(400).json({ error: "Please fill all fields" });
  }

  // Check environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error(
      "ERROR: Missing EMAIL_USER or EMAIL_PASS environment variables"
    );
    return res.status(500).json({
      error: "Server configuration error. Please contact administrator.",
    });
  }

  console.log("Email config:", {
    user: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    hasPassword: !!process.env.EMAIL_PASS,
  });

  // Set up nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Use your email as sender
    replyTo: email, // User can reply to the submitter
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `New Portfolio Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
    html: `
      <h3>New Portfolio Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    console.log("Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
    console.log("Response:", info.response);

    return res.status(200).json({
      message: "Form submitted successfully! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("❌ Error sending email:");
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error code:", error.code);
    console.error("Full error:", error);

    return res.status(500).json({
      error:
        "Failed to send message. Please try again or contact me directly at " +
        process.env.EMAIL_TO,
    });
  }
};
