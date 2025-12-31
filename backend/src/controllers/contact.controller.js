const Contact = require("../models/Contact.model");

// simple email regex (safe & common)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const createContact = async (req, res) => {
  try {
    let { name, email, message } = req.body;

    // Trim inputs
    name = name?.trim();
    email = email?.trim();
    message = message?.trim();

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (name.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Name must be at least 2 characters",
      });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    if (message.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must be at least 10 characters",
      });
    }

    // Save to DB
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (error) {
    console.error("CONTACT ERROR 👉", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error("GET CONTACTS ERROR 👉", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = { createContact, getAllContacts };


