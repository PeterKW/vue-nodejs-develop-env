const express = require('express');
const path = require('path');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const forms = [];

app.use(bodyParser.json());
app.use(express.static(process.cwd()+ '/my-app/build'));

app.get('/api/forms', (req, res) => {
  console.log('api/forms called!!!!!!!')
  res.json(forms);
});

app.post('/api/form', (req, res) => {
  const form = req.body.form;
  form.id = randomId(10);
  console.log('Adding use:::::::::::', form);
  forms.push(form);
  res.json("form addedd");
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+ '/my-app/build/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});