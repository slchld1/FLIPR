const router = require('express').Router();
const { Products } = require('../models')

router.get('/', async (req, res) => {
    try {
        const dbProduct = await Products.findAll({
            attributes: [
                'id',
                'title',
                'detail',
                'brand',
                'media',
            ],
        });
        const products = dbProduct.map((products) =>
            products.get({ plain: true })
        );

        res.render('shop', {
            products,
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
                        'media',
                    ],
        });
        const product = productDB.get({ plain: true });
        res.render('shop', { product })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;