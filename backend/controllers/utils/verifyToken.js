const jwt = require('jsonwebtoken');
require('dotenv').config();
// Get jwt secret message
const secretMessage = process.env.JWT_SECRET;

function verifyToken(req, res, next) {
  // Get token from cookies
  try {
    // Get json web token from cookies
    const { token } = req.cookies;
    // Check if token exists
    if(!token) return res.sendStatus(401).json({message:"No token provided."});
    // The verify the token
    ///const payload = jwt.verify(token, secretMessage);
    jwt.verify(token, secretMessage, (err, id) => {
      if(err) return res.sendStatus(403).json({mesage:"Forbidden."});
      // Assing the user to the id of user that created token
      req.user = id;
      // Execute the next function
      next();
    });
  } catch(err) {
      // otherwise, return a bad request error
      console.log('Error with getting user profile.')
		  return res.sendStatus(400).end();
   }
}

module.exports = verifyToken;