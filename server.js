require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').Server(app);

const { connect } = require('./socket');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

db(process.env.URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

connect(server);

router(app);

app.use('/app', express.static('public'));


server.listen(8080, function () {
    console.log('La aplicacion se esta ejecutando en http://localhost:8080');
});

