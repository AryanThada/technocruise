const mongoose = require("mongoose");

const formSchema ={
    name: { type:String,required:true},
    email:{ type:String,required:true},
    collegeName:{ type:String,required:true},
    collegeCity:{ type:String,required:true},
    phoneNumber:{ type:String,required:true}
}

const Form = mongoose.model("Form",formSchema);

// hello
module.exports = Form;