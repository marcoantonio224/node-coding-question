const express = require('express');
const verifyToken = require('../controllers/utils/verifyToken');
const router = express.Router();

const userController = require('../controllers').User;
const profileController = require('../controllers').Profile;

/*             User controller             */
router.post('/user', userController.create);
router.post('/login', userController.login);

/*             Profile controller             */
router.get('/profile', verifyToken, profileController.profile);


module.exports = router;