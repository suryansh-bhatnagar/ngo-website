const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({extended:false}));


console.log(path.join(__dirname , "../public"))

const static_path = path.join(__dirname , "../public");
app.use(express.static(static_path));

app.get('/',function(req,res){
    res.send('hello from suryansh')
})
app.get('/donate',function(req,res){
    res.render("donate")
})
app.get("/proceed", async (req,res)=>{


        res.render("proceed");
    
})

app.listen( 3000 , function () {
    console.log('server is running on 3000');
    
}
)