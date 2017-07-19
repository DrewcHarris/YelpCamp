// Required NPM Packages
var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    passport       = require("passport"),
    LocalStrategy  = require("passport-local"),
    methodOverride = require("method-override"),
    flash          = require("connect-flash"),
    moment         = require("moment");
    
// Requiring Routes
var campgroundsRoutes = require("./routes/campgrounds.js"),
    commentRoutes     = require("./routes/comments.js"),
    indexRoutes       = require("./routes/index.js");
    
// Using the returned campground object from models/camground.js
var Campground = require("./models/campground"),
    seedDB     = require("./seeds"),
    Comment    = require("./models/comment"),
    User       = require("./models/user");
    
// Telling Express to expect ejs files
app.set("view engine", "ejs");

// Make External Stylesheets Available
app.use(express.static(__dirname + "/public"));

//Connection info for MongoDB
mongoose.Promise = global.Promise;
//mongoose.connect("mongodb://localhost/yelp_camp");
mongoose.connect("mongodb://yelpcampdbuser:yelpcamppassword@ds113063.mlab.com:13063/yelpcamp");

// Telling express to use body parser
app.use(bodyParser.urlencoded({extended: true}));

// Telling express to use method override
app.use(methodOverride("_method"));

// Telling our app to use connect-flash
app.use(flash());

// Run seedDB function to remove and repopulate data each time the server starts
// seedDB();

// Telling our app to use moment
app.locals.moment = require('moment');

// Passport configuration
app.use(require("express-session")({
    secret: "leo shmeo is the best",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundsRoutes);

// Catchall Route
app.get("*", function(req, res){
   res.send("Uh oh, you're lost! 404! Call the Police!"); 
});

// Have Express Listen on the correct Port to serve the app
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});