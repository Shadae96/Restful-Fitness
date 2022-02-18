const express = require ('express');
const router = require('express').Router();
const {Workouts} = require('../models');

const withAuth = require('../utils/auth');

//getting the workouts
router.get('/workout', async (req, res) => {
    // res.json({test: 'test' });
    try {
        const workoutData = await Workouts.findAll()

        // Workouts was changed to excercises!
        const exercises = workoutData.map((workout) => workout.get ({plain: true}));
  

        res.render('workoutHistory', {
            exercises,
          logged_in :req.session.logged_in,
        });
  
  } catch (err) {
        res.status(500).json(err);
      }
    });

// Creating a new workout
router.post('/workout', async (req, res) => {
    try{
        const dbUserData = await Workouts.create({
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