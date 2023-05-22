const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc    Register New User
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please enter all fields')
  }

  // Check if user exists
  const userExists = await User.findOne({email});
  if (userExists) {
    res.status(400);
    throw new Error('User Already exists !')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({ 
    name, 
    email, 
    password: hashedPassword });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400);
    throw new Error('Invalid User data');
  }

})

// @desc    Authenticate a User
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({message: 'Login User'})
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.json({message: 'User Data displayed'})
})

module.exports = {
  registerUser,
  loginUser,
  getMe
}