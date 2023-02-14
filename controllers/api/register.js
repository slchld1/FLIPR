const express = require('express');
const {Customer} = require('../../models');
const db = require('../../config/connection')
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', async (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    console.log(req.body);
    var sql = `INSERT INTO customer (name, email, password) VALUES ('${name}', '${email}', '${password}');`;
    console.log(Customer);
    let queryOutput = await Customer.create(req.body)
    // await db.query(sql).then( function (err, result) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         // using userPage function for creating user page
    //         return true
    //     };
    // })
    console.log(queryOutput)
    if(!queryOutput) {
        res.status(400).json({
            message: 'error while registration'
        })
    }else{
        res.render('login');
    }
})
module.exports = router;