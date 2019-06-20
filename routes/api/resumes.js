const express = require("express");
const router = express.Router();
const passport = require("passport");

const validateResumeInput = require("../../validation/resume");

const Resume = require("../../models/Resume");


// @route   POST /api/resume
// @desc   Create a post
// @access   private
router.post(
    "/",
    jsonParser,
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      const { errors, isValid } = validateResumeInput(req.body);
      //check validation
      if (!isValid) {
        return res.status(400).json(errors);
      }
      const newPost = new Post({
        text: req.body.text,
        name: req.user.name,
        user: req.user.id
      });
      //save the post then return the post
      newPost.save().then(post => res.json(post));
    }
  );