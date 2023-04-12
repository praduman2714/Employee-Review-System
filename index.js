const express = require('express'); // requiring express, 
const port = 8000; // assigning port, so that I can try and test as this post,
const app = express(); 

// requiring express-ejs-layout, it will help in rendering the page.
const expressLayout = require('express-ejs-layouts');

// requring DataBase
const db = require('./config/mongoose');

const bodyParser = require('body-parser');
// Creating session
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');

// For getting the output from req.body(it will parse the upcoming request to String or Arrays).
app.use(bodyParser.urlencoded({extended:false}));
// For using the file in assets folder.
app.use(express.static('./assets'));

// Setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(expressLayout);

//mongo store is used to store the session cookie
app.use(session({
    name: 'habitTracker',
    // TODO change the secret before deployment in production mode
    secret: "habitTracker",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

// Using passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// setting up the router, following MVC structure.
app.use('/' , require('./routes/index'));



app.listen(port, function(err){
    if(err){
        console.log("Error in running the app.");
        return ;
    }
    console.log("Server is up and running at port ", + port);
});