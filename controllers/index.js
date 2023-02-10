// Routers
const router = require('express').Router()
const apiRoutes = require('./api/index');
const homeRoutes = require('./HomePage.js');
const withAuth = require('../utils/auth');
const { Customer } = require('../models');

router.get('/', withAuth, async (req, res) => {
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
})

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;