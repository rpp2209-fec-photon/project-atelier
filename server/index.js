require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const logger = require('./middlewares/logger.js');
const compression = require('compression');

const app = express();
const port = process.env.PORT;
const API = process.env.API;
const AUTH_TOKEN = process.env.AUTH_TOKEN;

// Set default url and header with api key for axios requests
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// add compression middleware
app.use(compression());

app.use(express.static(path.join(__dirname, '../client/dist')));

// log incoming request type and url
app.use(logger);

// handle favicon request from browser
app.get('/favicon.ico', (req, res) => {
  res.end();
});

// handle all request coming from client then make the same request to api
app.all('/*', (req, res) => {
  let endpoint = req.url;
  let method = req.method;
  let body = req.body;
  axios({
    method: method,
    url: `${API}${endpoint}`,
    data: body ? body : undefined
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
