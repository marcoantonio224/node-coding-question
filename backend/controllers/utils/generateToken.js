const jwt = require('jsonwebtoken');
// Run 'dotenv' to render application's environmental variables
require('dotenv').config();
// Get jwt secret message
const secretMessage = process.env.JWT_SECRET;

// Create a function to generate token
function generateJWT(userID, res) {
  // Create and sign a token based on user's id
  const token = jwt.sign({id: userID}, secretMessage);
  // Set a cookie for token
  res.cookie('token', token, {maxAge:900000, httpOnly:true});
  // Return token
  return token;
}

module.exports = generateJWT;