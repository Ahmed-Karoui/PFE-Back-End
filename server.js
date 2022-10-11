const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var session = require('express-session');
const app = express();

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

var usersRouter = require('./service/UserService');
const { request } = require('express');
app.use(cors({
    origin:['http://localhost:4200','http://127.0.0.1:4200'],
    credentials:true
  }));
  
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});

app.listen(3002, () => {
    console.log("Server is listening on port 3000");
});

app.use('/users', usersRouter);

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

//passeport
app.use(session({
    name:'myname.sid',
    resave:false,
    saveUninitialized:false,
    secret:'bouhmid',
    cookie:{
        maxAge:72000000,
        httpOnly:false,
        secure:false
    }
}));
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());
