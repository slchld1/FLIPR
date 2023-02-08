const express = require('express');
const expHandle = require('express-handlebars')
const path = require('path');
const sequelize = require('./config/connection');
const hbs = expHandle.create({});

const app = express();
const PORT = process.env.PORT || 3001;


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')))
app.use(require('./controllers/HomePage'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Success'));
});