const { Products } = require('../models')

const productData = 
    [{
        "id": 1,
        "title": "Tommy Jeans check cord overshirt in off white",
        "brand": "Tommy Jeans",
        "detail": "Shirts",
        "currency": "80",
        "media": "https://images.asos-media.com/products/tommy-jeans-check-cord-overshirt-in-off-white/204040154-1-ancientwhitecheck"
    },
    {
        "id": 2,
        "title": "The North Face Saikuru cropped puffer jacket in black",
        "detail": "Coats & Jackets",
        "brand": "The North Face",
        "currency": 210,
        "media": "https://images.asos-media.com/products/the-north-face-saikuru-cropped-puffer-jacket-in-black-exclusive-at-asos/203314409-1-black"
    },
    {
        "id": 3,
        "title": "The North Face Raglan Redbox sweatshirt in white",
        "detail": "Hoodies & Sweatshirts",
        "brand": "The North Face",
        "currency": 74,
        "media": "https://images.asos-media.com/products/the-north-face-raglan-redbox-sweatshirt-in-white/203212064-1-white"
    },
    {
        "id": 4,
        "title": "The North Face 100 Glacier 1/4 zip fleece in black",
        "detail": "Fleece by The North Face Regular fit",
        "brand": "The North Face",
        "currency": 50,
        "media":  "https://images.asos-media.com/products/the-north-face-100-glacier-1-4-zip-fleece-in-black/24381416-1-tnfblack"
    },
    {
        "id": 5,
        "title": "Tommy Jeans linear back logo classic fit t-shirt in white",
        "detail": "T-Shirts & Vests",
        "brand": "Tommy Jeans",
        "currency": 35, 
        "media":"https://images.asos-media.com/products/tommy-jeans-linear-back-logo-classic-fit-t-shirt-in-white/204039075-1-white"
    },
    {
        "id": 6,
        "title": "Levi's 501 original shorts in black",
        "detail": "High rise",
        "brand": "Levi's",
        "currency": 40, 
        "media":"https://images.asos-media.com/products/levis-501-original-shorts-in-black/204386093-1-stowaway"
    }
    ]

const seedProducts = () => Products.bulkCreate(productData)
module.exports = seedProducts;