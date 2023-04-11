const express = require('express'); // requiring express, 
const port = 8000; // assigning port, so that I can try and test as this post,
const app = express(); 

// requiring express-ejs-layout, it will help in rendering the page.
const expressLayout = require('express-ejs-layouts');

const bodyParser = require('body-parser');

// For getting the output from req.body(it will parse the upcoming request to String or Arrays).
app.use(bodyParser.urlencoded({extended:false}));
// For using the file in assets folder.
app.use(express.static('./assets'));

// Setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(expressLayout);
// setting up the router, following MVC structure.
app.use('/' , require('./routes/index'));



app.listen(port, function(err){
    if(err){
        console.log("Error in running the app.");
        return ;
    }
    console.log("Server is up and running at port ", + port);
});