
//Requiring mongoose package
var mongoose=require("mongoose");
  
// Schema
var formSchema=new mongoose.Schema({
    firstName: {
    type: String,
    required: true,
  },
    lastName: {
    type: String,
    required: true,
  },
    email: {
    type: String,
    required: true,
  },
});
  
module.exports=mongoose.model("Form",formSchema);