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
const forms = [];
//https://github.com/simonlast/node-persist/blob/master/examples/counter/counter.js
//const forms2 = [];

const questions = []; //ID | 
const pictures = [];

//https://attacomsian.com/blog/nodejs-list-directory-files
const fs = require('fs');

// directory path
//var pathname = url.parse(url).pathname; // pathname = '/MyApp'
const picturesdir = 'Pictures';

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

app.use(bodyParser.json());
app.use(express.static(process.cwd()+ '/my-app/build'));

app.get('/api/forms', (req, res) => {
  console.log('api/forms called!!!!!!!');
  res.json(forms);
});

app.get('/api/pictures', (req, res) => {
  console.log('pictures get called!!!!!!!');
  res.json(pictures);
});

app.post('/api/form', (req, res) => {
  const form = req.body.form;
  form.id = randomId(10);
  console.log('Adding use:::::::::::', form);
  forms.push(form);
  res.json("form addedd");
    /* if (forms == []){
        (async () => {
        await storage.init({logging: true, ttl: ttl});
        forms2 = await storage.getItem('forms');
        if (! forms2) {
        await storage.setItem('forms', forms);
        }
        forms = await storage.getItem('forms');
        console.log('forms is ' + forms);
        })();
        } */
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+ '/my-app/build/index.html');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});