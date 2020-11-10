const jwt = require('jsonwebtoken');
require('dotenv').config();
// Get jwt secret message
const secretMessage = process.env.JWT_SECRET;

function isLoggedIn(req, res, next) {
  // Get token from cookies
  try {
    // Get json web token from cookies
    const { token } = req.cookies;
    // Check if token exists
    if(!token) return res.status(401).json({message:"No token provided."});
    // The verify the token
    ///const payload = jwt.verify(token, secretMessage);
    jwt.verify(token, secretMessage, (err, id) => {
      // Return forbidden if error occurs
      if(err) return res.status(403).json({mesage:"Forbidden."});
      // Assing the user to the id of user that created token
      req.user = id;
      // Execute the next function
      next();
    });
  } catch(err) {
      // otherwise, return a bad request error
		  return res.status(400).json({ message: "Error getting user profile. "});
   }
}

module.exports = isLoggedIn;