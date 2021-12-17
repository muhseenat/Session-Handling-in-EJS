
//import all nodejs libraries that we want
const express = require('express');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const login=require('./routes/index')
const path = require('path');


//initialize express app
const app=express();
const PORT = 4000; 


//view engine setup
app.set('views',path.join(__dirname,'views'))//setting path to view engine
app.set('view engine','ejs');




app.use(logger('dev'));//logger middleware with dev parameter for development use like coloured error status
//parsing the http method request from html document
app.use(express.json());
app.use(express.urlencoded( { extended:false} ))

//for taking public files such as style.css etc.
app.use(express.static(path.join((__dirname ,'./public'))));
console.log(__dirname);



//cookie parser middleware
app.use(cookieParser());
//session middleware
app.use(sessions({
    secret:'3562bhusz3a72hvdcvsdajfu498',
    saveUninitialized:true,
    cookie:{ maxAge: 600000},
    resave:false
}));

app.use('/',login);

app.listen(PORT,()=> console.log(`Server is running at port ${PORT}`));
