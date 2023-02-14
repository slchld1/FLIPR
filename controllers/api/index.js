const router = require('express').Router();
const userRoutes = require('./user-routes');
const userRegister = require('./register');
const cartRoutes = require('./cart');

router.get('/', (req, res) => {
    res.json({ message: "hello"})
})
router.use('/register', userRegister);
router.use('/users', userRoutes);
router.use('/cart', cartRoutes);

module.exports = router;