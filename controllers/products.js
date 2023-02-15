const router = require('express').Router();
const { Products } = require('../models')
const { Customer } = require('../models')
router.get('/', async (req, res) => {

    try {
        const dbCustomer = await Customer.findByPk(req.session.user_id, {
            attributes: [
                `id`,
                `name`,
                `email`,
            ],
        });
        console.log(req.session)
        const customer = dbCustomer.get({ plain: true });
        const dbProduct = await Products.findAll({        
            attributes: [
                'id',
                'title',
                'detail',
                'brand',
                'currency',
                'media',
            ],
        });
        const products = dbProduct.map((products) =>
            products.get({ plain: true })
        );

        res.render('shop', {
            customer,
            products,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const productDB = await Products.findByPk(req.params.id, {
                    attributes: [
                        'id',
                        'title',
                        'detail',
                        'brand',
                        'currency',
                        'media',
                    ],
        });
        const product = productDB.get({ plain: true });
        res.render('product', { 
            product, 
            logged_in: req.session.logged_in,})
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


module.exports = router;