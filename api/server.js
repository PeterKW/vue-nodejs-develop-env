const express = require('express');
const path = require('path');
const randomId = require('random-id');
var url = require('url');
//const storage = require('../node_modules/node-persist');
//const storage = require('node-persist');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const surveys = [];
//https://github.com/simonlast/node-persist/blob/master/examples/counter/counter.js
//const forms2 = [];

const questions = []; //ID | 
const pictures = [];
const sounds = [];

//https://attacomsian.com/blog/nodejs-list-directory-files
const fs = require('fs');

// directory path
//var pathname = url.parse(url).pathname; // pathname = '/MyApp'
const picturesdir = 'Pictures';
const soundsdir = 'Sounds';

// list all files in the directory
try {
    const files = fs.readdirSync(picturesdir);

    // files object contains all files names
    // log them on console
    files.forEach(file => {
        pictures.push(picturesdir+'/'+file)
    });

    //Debug output to show picture paths have been stored correctly
    pictures.forEach( picture => {
      console.log(picture);
    })

} catch (err) {
    console.log(err);
}

// list all sounds files in the directory
try {
  const files = fs.readdirSync(soundsdir);

  // files object contains all files names
  // log them on console
  files.forEach(file => {
    if (file.endsWith(".mp3")){
      sounds.push(soundsdir+'/'+file)
    }
  });

  //Debug output to show sounds paths have been stored correctly
  sounds.forEach( sound => {
    console.log(sound);
  })

} catch (err) {
  console.log(err);
}
app.use(bodyParser.json());
app.use(express.static(process.cwd()+ '/my-app/build'));

app.get('/api/surveys', (req, res) => {
  console.log('api/surveys called!!!!!!!');
  res.json(surveys);
  console.log(surveys);
});

app.get('/api/pictures', (req, res) => {
  console.log('pictures get called!!!!!!!');
  res.json(pictures);
});

app.get('/api/sounds', (req, res) => {
  console.log('sounds got called!!!!!!!');
  sounds.forEach( sound => {
    console.log(sound);
  })
  res.json(sounds);
});

app.post('/api/survey', (req, res) => {
  const survey = req.body.survey;
  survey.id = randomId(10); //TODO check if already assigned?
  console.log('Adding use:::::::::::', survey);
  surveys.push(survey);
  res.json("survey added");
    /* if (surveys == []){
        (async () => {
        await storage.init({logging: true, ttl: ttl});
        forms2 = await storage.getItem('surveys');
        if (! forms2) {
        await storage.setItem('surveys', surveys);
        }
        surveys = await storage.getItem('surveys');
        console.log('surveys is ' + surveys);
        })();
        } */
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+ '/my-app/build/index.html');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});