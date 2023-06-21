const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// Define the routes for the users section
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
// Add more routes as needed

module.exports = router;
