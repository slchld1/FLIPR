const router = require('express').Router();
const userRoutes = require('./user-routes');
const userRegister = require('./register');

router.get('/', (req, res) => {
    res.json({ message: "hello"})
})
router.use('/register', userRegister);
router.use('/users', userRoutes);

module.exports = router;