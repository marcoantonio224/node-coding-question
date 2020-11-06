const express = require('express');
const router = express.Router();

const userController = require('../controllers').User;

console.log(userController)
/*             User controller             */
router.post('/user', userController.create);

module.exports = router;