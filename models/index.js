// models for users
const Customer = require('./Customer');
const Products = require('./Product')

Customer.hasMany(Products, {
    foreignKey: 'customer_id',
    onDelete: 'CASCADE',
  });
  
Products.belongsTo(Customer,{
    foreignKey: 'customer_id',
  });

module.exports = { Customer, Products };