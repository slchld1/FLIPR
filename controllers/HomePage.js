const router = require('express').Router();
const sequelize = require('../config/connection');
const { Customer } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
        try {
            const userData = await Customer.findAll({
                attributes: {exclude: ['password']},
                order: [['name', 'ASC']],
            });
    
            const users = userData.map((project) => project.get({ plain: true }));
    
            res.render('main', {
                users,
                logged_in: req.session.logged_in,
            });
        }   catch (err) {
                res.status(500).json(err);
        }
    res.render('body');
});

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