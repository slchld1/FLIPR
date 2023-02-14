const router = require('express').Router();
const { Customer } = require('../models')

router.get('/:id', async (req, res) => {
    try {
        const dbCustomer = await Customer.findByPk(req.params.id, {
            attributes: [
                `id`,
                `name`,
                `email`,
            ],
        });
        const customerData = dbCustomer.get({ plain: true });
        res.render('myAccount', {
            customerData,
            logged_in: req.session.logged_in, })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;