const mongoose = require('mongoose');

const MongoURL="mongodb://127.0.0.1:27017/hotal"
// Connect to MongoDB
mongoose.connect(MongoURL, 
          { useNewUrlParser: true, 
           useUnifiedTopology: true 
})
const db=mongoose.connection;

 db.on("connected",()=>{
          console.log("Cannected to MongoDB Server")
 })
 db.on("error",(err)=>{
          console.error("MongoDB Canection is Error",err);
 })
 db.on("disconnected",()=>{
          console.log("MongoDB Server is Discanected")
 })
 module.exports =db;
  