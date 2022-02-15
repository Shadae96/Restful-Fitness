const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../models/User');


//process to create a new user in the database.

router.post('/', async (req,res) =>{

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