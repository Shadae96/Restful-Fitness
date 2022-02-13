const router= require('express').Router();
const express = require ('express');
const { Blog } = require('../models/blog');

// Show Blog page

router.get('/blog', async (req, res) => {
    // try {
    //   const blogData = await Blog.findAll(req.body.title);
      res.render('blog');
});

      
      
    //   , {
    //     users,
    //     // Pass the logged in flag to the template
    //     logged_in: req.session.logged_in,
    //   });
    // } catch (err) {
    //   res.status(500).json(err);
    // }

module.exports = router;











// (New Code Above)
// __________________
// const fs = require ("fs");
// const http= require ("http");
// const util = require("util");
// const {v4 : uuidv4} = require('uuid');


// // Setting up the express Server
// router.use(express.static("public"));
// router.use(express.urlencoded({extended:true}));
// router.use(express.json());


// // Get notes from notes.html file
// router.get('/blog', (request,response)=> {
//     response.sendFile(path.join(__dirname, "views", "notes.html"));
//     console.log("retrieving notes file");
// });


// // Getting index file
// router.get('/', (request,response)=> {
//     response.sendFile(path.join(__dirname, "public", "index.html"));
// console.log("retrieving index file");

// });

// // Getting existing notes from database
// router.get('/api/blog', (request,response)=> {
//     fs.readFile(path.join(__dirname, "db","db.json"),"utf8", (err, jsonString) => {
//         if (err){
//             console.log ("Cannot read file:", err)
//         }

//         console.log ('File data:', jsonString);
//         response.json(JSON.parse(jsonString));
//     });


// });

// // Use the post method to collect a new note and save it to the html page body
// router.post('/api/blog', (request,response) => {
//     fs.readFile(path.join(__dirname, "db", "db.json"), 'utf8', (err,jsonString)=> {
//         if (err){ console.log ("Could not read file:", err)
//         return
//         }
//         console.log('File data:', jsonString);

//         var notes = JSON.parse(jsonString);
    

//         // object for notes
//         const newNote = {
//             title: request.body.title,
//             text: request.body.text,
//             id: Math.random().toString(36).substring(2,9)
//         };

//         notes.push(newNote);
//         let NotesJSON = JSON.stringify(notes);

//     fs.writeFile(path.join(__dirname,"db", "db.json"), NotesJSON, (err)=>
//     { if (err){
//         console.log (err);
//     }
//     console.log ("Your Note was successfully added!", NotesJSON);
//     return NotesJSON;

//     });
// });
// });



// Use the delete method of remove exisitng notes
router.delete(`/api/notes/:id`, (request, response)=> {
    fs.readFile(path.join(__dirname,"db", "db.json"), 'utf8',(err,jsonString)=>{
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

    fs.writeFile(path.join(__dirname, "db", "db.json"), NotesJSON, (err)=>
    {
        if (err) {
            return console.log("could not delete this note:", err)
        }
        console.log("Note has successfully been deleted!", NotesJSON);
        return NotesJSON;
    });
    });

});

module.exports = router
