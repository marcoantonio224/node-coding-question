const User = require('../database/models').User;

module.exports = {
  // Create method for new user
  create(req, res) {
    // Get request object for new user
    const { firstname, lastname, email, password } = req.body;
    // Create a new user
    return User.create({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password
      })
      // Send a status of 200 if created successfully
      .then(user => res.status(200).json({message:"Created user", user: user}))
      // Render internal error within the server and failure message
      .catch(error => res.send(500).json({message:"Oops! Saving user failed. Something went wrong."}));
  }
}