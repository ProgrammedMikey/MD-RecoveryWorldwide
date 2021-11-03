const express = require("express")
const session = require('express-session');
const flash = require('connect-flash');


const app=express();
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
  
var Form=require("./models/sign-up");
  
  
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

app.use(express.static(__dirname + '/public'));


app.use(session({
    secret:'recoveryWW',
    saveUninitialized: true,
    resave: true
}));
  
app.use(flash());
  
//rendering form.ejs
app.get("/",function(req,res){
    res.render("home");
});
  
// form submission
app.get('/result',(req,res)=>{
    res.render('result');
});


const { body, validationResult } = require('express-validator');

app.post('/',
    body('email').isEmail().normalizeEmail(),
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        res.status(200).json({
            success: true,
            message: 'Success',
        })
    });
  
// Starting the server
app.listen(8080, function() { 
    console.log('Server running on port 8080'); 
});