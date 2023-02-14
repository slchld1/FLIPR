const express = require('express');
const router = express.Router();
const { addItem } = require('./cartController');

// Route for adding item to cart
router.post('/add-item', addItem);

module.exports = router;