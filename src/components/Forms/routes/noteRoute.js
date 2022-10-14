const express = require("express");
const router = express.Router();
const Form = require("../models/noteModel");

router.post("/App",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const collegeName = req.body.collegeName;
    const collegeCity = req.body.collegeCity;
    const phoneNumber = req.body.phoneNumber;
    const Forms = new Form({
        name,
        email,
        collegeName,
        collegeCity,
        phoneNumber
    })
    Forms.save();
});
// router.route("/notes").get((req,res)=>{
//     Note.find()
//         .then(foundNotes => res.json(foundNotes))
// })

module.exports = router;