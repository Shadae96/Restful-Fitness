const express = require ('express');
// moved the express package up
const router = require('express').Router();
const { Blog } = require('../models/');

const path = require('path');
const withAuth = require('../utils/auth');
const {v4 : uuidv4} = require('uuid');

const fs = require ("fs");
const http= require ("http");
const util = require("util");


// Get notes from notes.html file
router.get('/blog', withAuth, async (request,response)=> {
  try {response.sendFile(path.join(__dirname, "views", "blog.handlebars"));
  console.log("retrieving notes file");
} catch (err) {
      res.status(500).json(err);
    }
  });  


// Getting main handlebar file
router.get('/blog', withAuth, async (request,response)=> {
 try { response.sendFile(path.join(__dirname, "views", "main.handlebars"));
console.log("retrieving index file");
 } catch (err) {
  res.status(500).json(err);
}
});  

// Getting existing notes from Json file
router.get('/seeds/blogData', (request,response)=> {
  fs.readFile(path.join(__dirname, "seed","blogData.json"),"utf8", (err, jsonString) => {
      if (err){
          console.log ("Cannot read file:", err)
      }

      console.log ('File data:', jsonString);
      response.json(JSON.parse(jsonString));
  });


});


//  Use the post method to collect a new note and save it to the html page body

router.post('/seeds/blogData', (request,response) => {
    fs.readFile(path.join(__dirname, "seed", "blogData.json"), 'utf8', (err,jsonString)=> {
        if (err){ console.log ("Could not read file:", err)
        return
        }
        console.log('File data:', jsonString);

        var notes = JSON.parse(jsonString);
    

        // object for notes
        const newNote = {
            title: request.body.title,
            text: request.body.text,
            id: Math.random().toString(36).substring(2,9)
        };

        notes.push(newNote);
        let NotesJSON = JSON.stringify(notes);

    fs.writeFile(path.join(__dirname,"seed", "blogData.json"), NotesJSON, (err)=>
    { if (err){
        console.log (err);
    }
    console.log ("Your Note was successfully added!", NotesJSON);
    return NotesJSON;

    });
});
});



// Use the delete method to remove exisitng notes
router.delete(`/seeds/blogdata/:id`, (request, response)=> {
  fs.readFile(path.join(__dirname,"seed", "blogData.json"), 'utf8',(err,jsonString)=>{
      if (err){
          console.log("Could not read file:", err)
          return
      }

      console.log('File data:', jsonString);

      var notes= JSON.parse(jsonString);

  const newNote = {
      title: request.body.title,
      text: request.body.text,
      id: uuidv4()

  };

  notes.splice(request.params.id,1);

  let NotesJSON = JSON.stringify(notes);

  fs.writeFile(path.join(__dirname, "views", "blogData.json"), NotesJSON, (err)=>
  {
      if (err) {
          return console.log("could not delete this note:", err)
      }
      console.log("Note has successfully been deleted!", NotesJSON);
      return NotesJSON;
  });
  });

});


module.exports = router;