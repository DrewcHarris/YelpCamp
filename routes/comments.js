var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middleware = require("../middleware");

// Comments New
router.get("/new", middleware.isLoggedIn, function(req, res){
    // find campgrond by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }    
        else{
            res.render("comments/new", {campground: campground});
        }
    });
});

// Comment Create
router.post("/", middleware.isLoggedIn, function(req, res){
   //look up campground ID
   Campground.findById(req.params.id, function(err, campground){
      if(err){
          console.log(err);
          res.redirect("/campgrounds");
      } else {
          Comment.create(req.body.comment, function(err, comment){
              if(err){
                  req.flash("error", "Something went wrong.  Please try again.");
                  console.log(err);
              }
              else{
                  // add username and id to comment
                  req.user.username;
                  comment.author.id = req.user._id;
                  comment.author.username = req.user.username;
                  // save comment
                  comment.save();
                  campground.comments.push(comment);
                  campground.save();
                  req.flash("success", "Comment added successfully");
                  res.redirect("/campgrounds/" + campground._id);
              }
          });
      }
   });
});

// Comment Edit
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){
            res.redirect("back");
        }
        else{
            res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
        }
    });
});

// Comments Update
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
   Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
      if(err){
          req.flash("error", "Something went wrong.  Please try again.");
          res.redirect("back");
      } 
      else {
          req.flash("success", "Comment updated successfully");
          res.redirect("/campgrounds/" + req.params.id);
      }
   });
});

// Comment Destory Route
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res){
   // findByIdAndRemove 
   Comment.findByIdAndRemove(req.params.comment_id, function(err){
       if(err){
           req.flash("error", "Something went wrong.  Please try again.");
           res.redirect("back");
       }
       else{
           req.flash("success", "Comment deleted successfully");
           res.redirect("/campgrounds/" + req.params.id);
       }
   });
});

module.exports = router;
