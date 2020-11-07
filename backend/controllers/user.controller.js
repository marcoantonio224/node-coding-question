const User = require('../database/models').User;
const createJWToken = require('./utils/generateToken');
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
  },
  login(req, res) {
    const { email, password } = req.body;
    User.findOne({ where: { email: email } })
      .then(user => {
        // Check if login password matches user's password
        user.isValidPassword(password)
         // Successful promise, continue the process
         .then((result, err) => {
           // If invalid password, send invalid login
           if(!result) return res.send(401).json({ message:"Invalid login." });
           // Create token for client
           const token = createJWToken(user.id);
           // Valid password, continue the process
           res.json({ message:"Valid logged in.", token: token });
        })
      })
      // Failed promise
      .catch(err => res.send(500).json({message:"Oops! Something went wrong."}))
  }
}