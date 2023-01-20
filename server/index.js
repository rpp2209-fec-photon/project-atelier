const express = require('express');
const axios = require('axios');
const path = require('path');
const logger = require('./middlewares/logger.js');

const app = express();
const port = 3000;
const AUTH_TOKEN = require('./env/config.js');
const API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp';

// Set default url and header with api key for axios requests
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));

// log incoming request type and url
app.use(logger);

// handle favicon request from browser
app.get('/favicon.ico', (req, res) => {
  res.end();
});

// handle all route coming from client then make the same request to api
app.all('/*', (req, res) => {
  let endpoint = req.url;
  let method = req.method;
  axios({
    method: method,
    url: `${API}${endpoint}`,
  })
  .then((response) => {
    res.json(response.data);
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(501);
  })
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});