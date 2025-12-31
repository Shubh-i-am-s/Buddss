const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const rateLimit = require("express-rate-limit");

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 requests per IP
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});


// Routes
const contactRoutes = require("./routes/contact.routes");
app.use("/api/contact", contactLimiter, contactRoutes);


// Test route
app.get("/", (req, res) => {
  res.send("Buddies Universe Backend running 🚀");
});

module.exports = app;
