const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Customer } = require('../models');

router.get('/', async (req, res) => {
    try {
        const userData = await Customer.findAll({
            attributes: {exclude: ['password']},
            order: [['name', 'ASC']],
        });

        const users = userData.map((project) => project.get({ plain: true }));

        res.render('body', {
            users,
            logged_in: req.session.logged_in,
        });
    }   catch (err) {
            res.status(500).json(err);
    }
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

// router.get('/products', withAuth, async (req, res) => {
//     try {
//         const userData = await Customer.findAll({
//             attributes: {exclude: ['password']},
//             order: [['name', 'ASC']],
//         });

//         const users = userData.map((project) => project.get({ plain: true }));

//         res.render('shop', {
//             users,
//             logged_in: req.session.logged_in,
//         });
//     }   catch (err) {
//             res.status(500).json(err);
//     }
// })

router.get('/cart', async(req, res) => {
    res.render('cart');
});

router.get('/myaccount', async(req, res) => {
    res.render('myacct');
});

module.exports = router;