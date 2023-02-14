// models for users
const Customer = require('./Customer');
const Products = require('./Product');
const Cart = require('./Cart');

Customer.hasMany(Cart, {
  foreignKey: 'customer_id',
});

Cart.belongsTo(Customer, {
  foreignKey: 'customer_id',
});

Products.belongsToMany(Customer, {
  through: Cart,
  foreignKey: 'product_id',
});

Customer.belongsToMany(Product, {
  through: Cart,
  foreignKey: 'customer_id',
});
  
module.exports = { Customer, Products, Cart };