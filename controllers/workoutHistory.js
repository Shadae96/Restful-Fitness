const express = require ('express');
const async = require('seed/lib/seed/base/async');
const router = require('express').Router();
const { Workouts} = require('../models');
const withAuth = require('../utils/auth');


//Will display the new workout page
// redirects /api/workoutHistory
router.get ('/', withAuth, async (req, res,) => {
    res.render('workoutHistory');
});


router.get('/', withAuth, async (req, res) => {
    try {
      const workoutData = await Workouts.findAll()
      const workouts = workoutData.map((workout) => workout.get({ plain: true }));
  
      res.render("workoutHistory",
        {
          workouts,
          logged_in: req.session.logged_in
  
        })
  
    } catch (err) {
      res.status(500).json(err);
    }
  });





module.exports = router;