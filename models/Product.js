const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model {}

Products.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,      
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        detail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        currency: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        media: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'customer',
              key: 'id',
            },
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'products',
    }
    );
    
    module.exports = Products;