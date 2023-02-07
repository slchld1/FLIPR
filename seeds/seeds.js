// seeds
const sequelize = require('./config/connection');
const { Customer } = require('../models');

const userData = require('./userData.json');

const seededDatabase = async () => {
        await sequelize.sync({  force: true });

        await Customer.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        })
        process.exit(0);
}

seededDatabase();