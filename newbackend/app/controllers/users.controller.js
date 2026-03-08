const db = require("../models");
const User = db.users;
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables
const Op = db.Sequelize.Op;
// Load secret key from environment variables
const SECRET_KEY = process.env.JWTSECRETKEY;

exports.authenticate = async (req, res) => {

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ message: "User not found." });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials." });
    // Generate JWT Token
    const token = jwt.sign({ email: user.email, username: user.username }, SECRET_KEY, { expiresIn: "1h" });


    res.json({ message: "Login successful", token: token, data: user, status: true });
  } catch (err) {
    res.status(201).json({ error: err.message });
  }
};
exports.login = async (req, res) => {

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).json({ message: "User not found." });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials." });
    if (user.status == 'Inactive') return res.status(401).json({ message: "User is not active." });

    // Generate JWT Token
    const token = jwt.sign({ email: user.email, username: user.username }, SECRET_KEY, { expiresIn: "1h" });



    res.json({ message: "Login successful", token: token, data: user, status: true });
  } catch (err) {
    console.error("Login error:", err); // This will show full stack in the terminal
    res.status(500).json({
      error: err?.message || "An unexpected error occurred",
      details: err
    });
  }
};

//  Get all users
exports.findAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ status: true, data: users });
  } catch (err) {
    res.status(201).json({ error: err.message });
  }
};

//  Create a new user (Hash password)
exports.create = async (req, res) => {
  try {
    const { username, email, password, status, access } = req.body;

    //  Check for existing email
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(201).json({ error: 'Email already exists', status: false });
    }

    //  Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      status,
      access,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    res.status(201).json({ user: user, status: true, message: "User addede successfully." });
  }
  catch (err) {
    console.error("create error:", err); // This will show full stack in the terminal
    res.status(500).json({
      error: err?.message || "An unexpected error occurred",
      details: err
      , status: false
    });
  }
};
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = { ...req.body, updatedAt: new Date() };
    const user = await User.findOne({ where: { id } });
    if (updatedData.password != '') {
      updatedData.password = await bcrypt.hash(updatedData.password, 10);
    } else {
      updatedData.password = user.password; // Keep the old password if not provided
    }

    await User.update(updatedData, { where: { id } });
    res.json({ message: "User updated successfully.", status: true, });
  } catch (err) {
    console.error("upadate error:", err); // This will show full stack in the terminal
    res.status(500).json({
      error: err?.message || "An unexpected error occurred",
      details: err
      , status: false
    });
  }
};

//  Delete a user by id
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    await User.destroy({ where: { id } });
    res.json({ message: "User deleted successfully.", status: true });
  } catch (err) {
    console.error("delet error:", err); // This will show full stack in the terminal
    res.status(500).json({
      error: err?.message || "An unexpected error occurred",
      details: err
      , status: false
    });
  }
};

//  status update by id
exports.updateStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;
    await User.update({ status, updatedAt: new Date() }, { where: { id } });
    res.json({ message: "Status updated successfully.", status: true });
  } catch (err) {
    console.error("status error:", err); // This will show full stack in the terminal
    res.status(500).json({
      error: err?.message || "An unexpected error occurred",
      details: err
      , status: false
    });
  }
};