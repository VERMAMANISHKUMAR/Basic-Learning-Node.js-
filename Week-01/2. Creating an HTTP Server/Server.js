// 01 import the http library/module
const http=require('http');

// 02 Create Server
const server=http.createServer((req,res)=>{
  
  res.end('Welcome to Node Js Server');
});
// 03S Specify Server Port
server.listen(3100,()=>{
  console.log('Server is running on port 3100');
});