const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models/User');


//process to create a new user in the database.

router.post('/', async (req,res) =>{

const name = req.body.name;
const email = req.body.email;
const password = req.body.password;
const password2 = req.body.password2;
const age = req.body.age;
const weight = req.body.weight;
const height = req.body.height;



req.checkBody('name', 'Name is required').notEmpty();
req.checkBody('email', 'Email is required').notEmpty();
req.checkBody('email', 'Email is not valid').isEmail();
req.checkBody('password', 'Password is required').notEmpty();
req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
req.checkBody('age', 'Age is required').notEmpty();
req.checkBody('weight', 'Weight is required').notEmpty();
req.checkBody('height', 'Height is required').notEmpty();

let errors = req.validationErrors();

if(errors){
    res.render('register', {
        errors: errors
    });
} else {
    const salt = await bcrypt.genSalt(10);
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height,
        password: await bcrypt.hash(req.body.password, salt)
    });
    newUser.save();
    req.flash('sucess', 'You are now registered and can log in');
    res.render('login')
}
});

module.exports = router