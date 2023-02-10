const express = require('express');
const User = require('../../models');

const router = express.Router();

router.get('/', (req, res) => {
    // const newUser = newUser({ ...req.body})
    res.json({ message: "hello" })
})

module.exports = router;