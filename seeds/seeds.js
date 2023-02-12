// seeds
const sequelize = require('../config/connection');
const { Customer } = require('../models');
const { Products } = require('../models');

const userData = require('./userData.json');
const seedProducts = require('./newExports');

const seededDatabase = async () => {
        await sequelize.sync({  force: true });

        await Customer.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        })
        await seedProducts();
        process.exit(0);
}


seededDatabase();
