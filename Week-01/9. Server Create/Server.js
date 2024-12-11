const express=require("express")
const app=express()

app.get('/', function(req,res){
res.send("Hello this is home page")
})
app.get('/about', function(req,res){
          res.send("Hello this is About page")
})
app.get('/service', function(req,res){
          res.send("Hello this is Service page")
})
app.get('/contect', function(req,res){
          res.send("Hello this is Contect page")
})


app.listen(3800,()=>{
          console.log("Server is Runing on localhost 3800")
})

