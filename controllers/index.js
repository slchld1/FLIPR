// Routers
const router = require('express').Router()
const apiRoutes = require('./api/index');
const homeRoutes = require('./HomePage.js');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;