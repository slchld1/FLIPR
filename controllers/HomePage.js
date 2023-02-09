const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
    res.render('body');
});

router.get('/join', async(req, res) => {
    res.render('join');
});


module.exports = router;