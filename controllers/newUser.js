const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models');


//process to get a new user in the database.
router.get('/', (req, res, next) => {
    res.json({test: 'test' });
});

//http://localhost:3001/register/login/register/login
router.post('/', async (req, res) => {
    try{
        const dbUserData = await User.create({
            user_name: req.body.user_name,
            phone: req.body.phone,
            email: req.body.email,
            age: req.body.age,
            weight: req.body.weight,
            height: req.body.height,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
});



module.exports = router