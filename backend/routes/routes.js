const express = require('express');
const isLoggedIn = require('../controllers/utils/isLoggedIn');
const router = express.Router();

const userController = require('../controllers').User;
const profileController = require('../controllers').Profile;
const postController = require('../controllers').Post;


/*             User controller             */
router.post('/user', userController.create);
router.post('/login', userController.login);

/*             Profile controller             */
router.get('/profile', isLoggedIn, profileController.profile);

/*             Post controller             */
router.post('/post', postController.create);


module.exports = router;