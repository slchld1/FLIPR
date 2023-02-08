// Customer bcrypt

const { Model, Datatypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Customer extends Model {
    checkPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

Customer.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate:{ 
                isEmail: true,
            },
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [6],
            }
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
        },
        {
            hooks: {
                beforeCreate: async (newData) => {
                    newData.password = await bcrypt.hash(newData.password, 10)
                    return newData
                },
            },
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'customer',
        }
    );

    module.exports = Customer;