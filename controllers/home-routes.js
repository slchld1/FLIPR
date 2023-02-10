const router = require('express').Router();
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
});

router.get('/login', (req, res) =>  {
    if  (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;