const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler( async (req, res, next) => {
  let token;

  // Check if Token Exists in the header
  // Get Token from the header
  // Verify the Token. Done by using the received token and the SECRET_KEY
  // If Verfied then get USER who is makin the REQUEST. 
  // We can get the user from the verified token as the id is passed in the payload of token
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get Token from the REQUEST header
    token = req.headers.authorization.split(' ')[1];

    // Verify the token received from the user request header
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get the user from the decoded token using the payload id
    req.user = await User.findById(decoded.id).select('-password');

    next()
    
    } catch (error) {
      console.log(error);
      // 401 : Not Authorized
      res.status(401);
      throw new Error('Not Authorized');
    }

  }

  if (!token) {
    res.status(401);
    throw new Error('Not Authorized : No Token');
  }

})

module.exports = { protect }
