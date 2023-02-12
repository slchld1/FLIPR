const router = require('express').Router();
const { Products } = require('../models/Product')

router.get('/', async (req, res) => {
    try {
        const dbProduct = await Products.findAll({
        include: [
          {
            model: Products,
            attributes:[
                'id',
                'title',
                'detail',
                'brand',
                'media',
            ],
          },
        ],
      });
  
      const products = dbProduct.map((product) =>
        product.get({ plain: true })
      );
  
      res.render('shop', {
        products,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

router.get('/:id', async(req, res) => {
    try {
        const productDB = await Products.findByPk(req.params.id, {
            include: [
                {
                    model: Products,
                    attributes: [
                        'id',
                        'title',
                        'detail',
                        'brand',
                        'media',
                    ],
                },
            ],
        });
        const product = productDB.get({ plain: true});
        res.render('product', {product})
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;