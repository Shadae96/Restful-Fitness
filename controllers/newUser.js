const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models/User');


//process to create a new user in the database.
router.get('/', (req, res, next) => {
    res.json({test: 'test' });
});

router.post('/register', async (req, res) => {
    try{
        const dbUserData = await User.create({
            user_name: req.name.value,
            phone: req.phone.value,
            email: req.email.value,
            age: req.age.value,
            weight: req.weight.value,
            height: req.height.value,
            password: req.password.value
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    } catch(err){
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router