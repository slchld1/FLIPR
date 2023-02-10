const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/join', async(req, res) => {
    res.render('join');
});

router.get('/login', async(req, res) => {
    if  (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/shop', async(req, res) => {
    res.render('shop');
});

router.get('/cart', async(req, res) => {
    res.render('cart');
});

module.exports = router;