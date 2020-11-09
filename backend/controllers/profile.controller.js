const User = require('../database/models').User;

module.exports = {
  // Create method for new user
  profile(req, res, next) {
    try {
        // Get token from cookies
        const { id } = req.user;
        console.log(req.user)
        User.findOne({ where: { id: id } })
        // Send a status of 200 if created successfully
        .then(user => res.status(200).json({message:"Created user", user: user}))
        // Render internal error within the server and failure message
        .catch(error => res.send(500).json({message:"Oops! Saving user failed. Something went wrong."}));
    } catch(err) {
      console.log(err)
    }
  }
}