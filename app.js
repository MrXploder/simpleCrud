//////////////////////////////////////////////////
//import eviroment
const path       = require('path');
const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');

/////////////////////////////////////////////////
//define express app
const app = express();

/////////////////////////////////////////////////
//configure mongoose
mongoose.connect('mongodb://localhost:27017/simpleCrud', { useNewUrlParser: true });
mongoose.Promise = require('bluebird');

////////////////////////////////////////////////
//body parser middleware configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

////////////////////////////////////////////////
//use proyects folder: "public" as my statics assets folder mapped to root ("/")
app.use('/', express.static(path.join(__dirname, 'public')));

////////////////////////////////////////////////
//routes definitions
app.use('/patients', require('./router/Patients'));

///////////////////////////////////////////////
//start server
app.listen(3000);
console.log('simpleCrud FullStack Running at port 3000...');