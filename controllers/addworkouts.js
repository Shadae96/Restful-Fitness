const express = require ('express');
const router = require('express').Router();
const { Workouts, User } = require('../models');
const path = require('path');
const withAuth = require('../utils/auth');
const fs = require ("fs");
const http= require ("http");
const util = require("util");


    
// Creating a new workout
// request at /api/addworkouts

router.post('/', withAuth, async (req, res) => {
    try{
        const dbUserData = await Workouts.create({
            ...req.body,
            user_name: req.body.user_name,
            title: req.body.title,
            duration: req.body.duration,
            intensity: req.body.intensity,
            outcome: req.body.outcome,
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




module.exports = router;