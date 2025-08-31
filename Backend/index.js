const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())
app.listen(3000,function(){
    console.log("server startd...")
})

var username="jagan"
var password=123

app.get("/login",function(req,res){
    if(req.query.username===username && req.query.password==password){
        res.send("true")
    }
    else{
        res.send("false")
    }

})

