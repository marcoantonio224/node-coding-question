const User = require('../database/models').User;

module.exports = {
  // Create method for new user
  profile(req, res, next) {
    try {
        // Get token from cookies
        const { id } = req.user;
        // Find the user according to id
        User.findOne({ where: { id: id } })
          // Send a status of 200 if created successfully
          .then(user => res.status(200).json({message:"User logged in", user: user.short()}))
          // Render internal error within the server and failure message
          .catch(error => res.status(500).json({message:"Oops! Fetching user data went wrong."}));
    } catch(err) {
      console.log(err)
    }
  }
}