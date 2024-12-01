// 01 import the https library/modules
 const https=require('https');
 //02 Create the Server
 const server = https.createServer((req,res)=>{
 res.end('Welcome to Node Js Server');
 })
 //03 Create the Server Ports
 const port =process.env.PORT||3200;
  server.listen(port,()=>{
          console.log(`Server is running at https://localhost:${port}`);
  })