const router = require('express').Router();
const { Customer } = require('../models')

router.get('/:id', async (req, res) => {
    try {
        const dbCustomer = await Customer.findByPk(req.session.user_id, {
            attributes: [
                `id`,
                `name`,
                `email`,
            ],
        });
        const customer = dbCustomer.get({ plain: true });
        console.log(customer)
        res.render('myacct', {
            customer,
            logged_in: req.session.logged_in, })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;