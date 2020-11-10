const Post = require('../database/models').Post;
const moment = require('moment');

module.exports = {
  // Create method for new Post
  create(req, res) {
    try{
      // Get request object for new Post
      const { author, title, description  } = req.body;
      console.log(req.body)
      // Create a new date for time of creation
      const date = moment().format();
      console.log(date)
      // Create a new post
      return Post.create({
            author: author,
            title: title,
            description: description,
           // photos: photos
            createdAt: date,
            updatedAt: date
        })
        // Send a status of 200 if created successfully
        .then(post => res.status(200).json({message:"Created post", post: post}))
        // Render internal error within the server and failure message
        .catch(error => res.status(500).json({message:"Oops! Saving post failed. Something went wrong."}));
    } catch(err) {
      console.log(err)
    }
  },
}