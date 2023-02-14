const router = require("express").Router();
const { Cart, Customer } = require("../../models");

// Create a route for adding items to the cart
router.post("/add/:id", async (req, res) => {
  try {
    // Check if the user is logged in
    //if (req.session.id) {
      const productToAdd = await Cart.create({
        title: req.body.title,
        brand: req.body.brand,
        detail: req.body.detail,
        currency: req.body.currency,
        media: req.body.media,
        quantity: req.body.quantity,
        // customer_id: req.body.customer_id
      });
      // Find the user's cart
      const user = await Customer.findByPk(req.params.id, {
        include: [{ model: Cart}]
      });

      if(!user) {
      res.status(404).json({message: "No User Found With This ID!"})
      return;
    }
    //if (!Cart) {
    //  
    //  await Customer.setCart(Cart);
    //  return;
    //}
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
