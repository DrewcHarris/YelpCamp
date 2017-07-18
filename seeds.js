var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest",
            image: "https://farm4.staticflickr.com/3162/2642197987_2c71947286.jpg",
            description: "Slow-carb mumblecore paleo, pabst literally DIY glossier tilde humblebrag gentrify cold-pressed knausgaard banh mi yuccie pour-over. Stumptown ennui butcher, tumblr photo booth raw denim yuccie unicorn portland distillery. Master cleanse craft beer pitchfork seitan artisan austin. Ethical chillwave jean shorts man braid pickled, viral YOLO vinyl. Adaptogen man bun banjo, fingerstache franzen hashtag mlkshk copper mug paleo mustache. Blog lo-fi chambray, kogi squid chicharrones truffaut tbh listicle snackwave organic austin health goth XOXO kickstarter. Chillwave sartorial mixtape hexagon chia chicharrones succulents."
        },
        {
            name: "Beacon Hill",
            image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg",
            description: "Messenger bag pitchfork subway tile wayfarers vegan williamsburg salvia, chia fashion axe helvetica cray. Four loko crucifix stumptown semiotics VHS, mlkshk seitan ennui raw denim bespoke kinfolk locavore marfa microdosing leggings. Cronut 3 wolf moon taxidermy, shaman affogato neutra pinterest waistcoat blue bottle PBR&B. Biodiesel hella iPhone, thundercats irony iceland master cleanse paleo meditation palo santo activated charcoal trust fund lomo hexagon post-ironic. Pitchfork tousled meggings pop-up, chia tumblr irony tacos aesthetic disrupt letterpress direct trade fashion axe gochujang. Chartreuse trust fund man braid, viral cred celiac 90's literally tousled. Selvage aesthetic craft beer, drinking vinegar cloud bread vexillologist quinoa four dollar toast bespoke."
        },
        {
            name: "Summer Pass",
            image: "https://farm9.staticflickr.com/8307/7930018638_1763131c42.jpg",
            description: "iodiesel beard direct trade, crucifix bushwick mixtape swag copper mug salvia. Activated charcoal four loko pitchfork, fam tbh etsy meggings biodiesel hot chicken williamsburg tote bag salvia. 3 wolf moon tote bag cloud bread trust fund activated charcoal, VHS scenester williamsburg keytar sriracha drinking vinegar. Narwhal bitters shabby chic small batch blue bottle brunch, la croix edison bulb street art yuccie. Kombucha affogato viral, offal bitters food truck tilde irony taiyaki vinyl cray woke swag selvage. Everyday carry ethical chambray, put a bird on it pok pok lomo hammock single-origin coffee fam biodiesel hella paleo readymade mustache ramps. VHS venmo direct trade tumeric cray"
        }
    ];

function seedDB(){
    // Remove All Campgrounds    
   Campground.remove({}, function(err){
       console.log("Removed Campgrounds!");
        // if(err){
        //     console.log(err);
        // } 
        // else {
        //   console.log("Removed camgrounds"); 
        //   // Add a few campgrounds
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, campground){
        //           if(err){
        //               console.log(err);
        //           }
        //           else{
        //               console.log("added campground " + seed.name);
        //               // create a comment
        //               var i = 1;
        //               Comment.create(
        //                   {
        //                       text: "This place is great, but I wish there was internet! ",
        //                       author: "Homer"
        //                     },   
        //                     function(err, comment) {
        //                             if(err){
        //                                 console.log(err);
        //                             }
        //                             else {
        //                                 campground.comments.push(comment);
        //                                 campground.save();
        //                                 console.log("Added comment: " + comment);
        //                             }
        //                     });
        //                 }
        //         });
        //     }); 
        // }
    }); 
}




module.exports = seedDB;