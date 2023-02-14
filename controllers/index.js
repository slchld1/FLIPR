// Routers
const router = require('express').Router()
const apiRoutes = require('./api/index');
const homeRoutes = require('./HomePage.js');
const productRoutes = require('./products.js');
const myAccRoutes = require('./myAcc.js')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/products', productRoutes);
router.use('/myAccount')

module.exports = router;