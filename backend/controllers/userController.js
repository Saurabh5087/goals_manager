const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
  res.json({message: 'Register User'})
})

module.exports = {
  registerUser
}