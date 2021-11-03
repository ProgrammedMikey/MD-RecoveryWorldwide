const express = require("express")
const app=express();
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
  
var Form=require("./models/sign-up");
  
  
// const username = "<mdRecovery>";
// const password = process.env.MONGODB_PASS
// const cluster = "<cluster0.2myrz>";
// const dbname = "RecoveryWorldWide";
  
mongoose.connect(
  `mongodb+srv://mdRecovery:mdRecovery@cluster0.2myrz.mongodb.net/RecoveryWorldWide?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
  
//middlewares
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
  
//rendering form.ejs
app.get("/",function(req,res){
    res.render("home");
});
  
// form submission
app.get('/result',(req,res)=>{
    res.render('result');
});
  
//creating form
app.post("/",function(req,res){ 
    var firstName=req.body.firstName;
    var lastName=req.body.lastName;
    var email=req.body.email;
    
    console.log('Got body:', req.body);
    
    var formData={firstName: firstName,lastName: lastName, email:email};
    Form.create(formData,function(err,newlyCreatedForm){
        if(err)
        {
            console.log(err);
            res.status(500).send(err);
        }else{
            // res.redirect("/result");
             res.status(200).send("Success");
        }
    });
});
  
// Starting the server
app.listen(8080, function() { 
    console.log('Server running on port 8080'); 
});