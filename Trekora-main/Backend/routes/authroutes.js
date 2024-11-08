const express = require('express');
const { login, register } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// User Registration Route
router.post('/register', register);

// User Login Route
router.post('/login', login);

router.get('/profile', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Welcome to your profile!' });
});

module.exports = router;

