// Routers
const router = require('express').Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.get('/', ensureGuest, (req, res) => {
    res.render('login')
})

router.get('/login', ensureAuth, async(req, res) => {
    res.render('index', {userinfo: req.user})
})

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;