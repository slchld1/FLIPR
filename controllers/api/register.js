const express = require('express');
const User = require('../../models');
const db = require('../../config/connection')
const bcrypt = require('bcrypt');


const router = express.Router();

router.post('/', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    db.connect(function(err) {
        if (err) throw err

        db.query(`SELECT * FROM customer WHERE email = ${email} AND password = ${password}`, function(err, result){
            if(err) throw err
    })
    if(Object.keys(result).length > 0){
        res.sendFile(__dirname + '/');
    }else{
        function newUser(){
            req.session.customer = {
                name: name,
                email: email,
                password: password
            }
        }
    }
    var sql = `INSERT INTO customer (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
                db.query(sql, function (err, result) {
                    if (err){
                        console.log(err);
                    }else{
                        // using userPage function for creating user page
                        newUser();
                    };
        })
    })
})
module.exports = router;