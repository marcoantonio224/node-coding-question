const jwt = require('jsonwebtoken');
// Run 'dotenv' to render application's environmental variables
require('dotenv').config();
// Get jwt secret message
const secretMessage = process.env.JWT_SECRET;

// Create a function to generate token
function generateJWT(userID) {
  // Create and sign a token based on user's id
  const token = jwt.sign({userID}, secretMessage, {
    algorithm: "HS256"
  });
  // Return token
  return token;
}

module.exports = generateJWT;