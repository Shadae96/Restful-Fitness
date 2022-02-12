const router = require('express').Router();
const { Blog } = require('../../models');

// (New Code Above)
// __________________

const express = require("express");
const path = require ("path");
const fs = require ("fs");
const http= require ("http");
const util = require("util");
const {v4 : uuidv4} = require('uuid');
const app = express();


// Setting up the express Server
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const port = process.env.PORT || 3004;


// Get notes from notes.html file
app.get('/notes', (request,response)=> {
    response.sendFile(path.join(__dirname, "public", "notes.html"));
    console.log("retrieving notes file");
});


// Getting index file
app.get('/', (request,response)=> {
    response.sendFile(path.join(__dirname, "public", "index.html"));
console.log("retrieving index file");

});

// Getting existing notes from database
app.get('/api/notes', (request,response)=> {
    fs.readFile(path.join(__dirname, "db","db.json"),"utf8", (err, jsonString) => {
        if (err){
            console.log ("Cannot read file:", err)
        }

        console.log ('File data:', jsonString);
        response.json(JSON.parse(jsonString));
    });


});

// Use the post method to collect a new note and save it to the html page body
app.post('/api/notes', (request,response) => {
    fs.readFile(path.join(__dirname, "db", "db.json"), 'utf8', (err,jsonString)=> {
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

    fs.writeFile(path.join(__dirname,"db", "db.json"), NotesJSON, (err)=>
    { if (err){
        console.log (err);
    }
    console.log ("Your Note was successfully added!", NotesJSON);
    return NotesJSON;

    });
});
});



// Use the delete method of remove exisitng notes
app.delete(`/api/notes/:id`, (request, response)=> {
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



app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});

module.exports = router;
