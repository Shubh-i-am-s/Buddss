const express = require("express");
const {
  createContact,
  getAllContacts,
} = require("../controllers/contact.controller");

const router = express.Router();

// Create message
router.post("/", createContact);

// Admin: get all messages
router.get("/", getAllContacts);

module.exports = router;
