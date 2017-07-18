var mongoose = require("mongoose");

// Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    cost: String,
    image: String,
    description: String,
    location: String,
    lat: Number,
    lng: Number,
    createdAt: { type: Date, default: Date.now },
    author: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

// Exporting the Campground Model object to be used in other files

module.exports = mongoose.model("Campground", campgroundSchema);
