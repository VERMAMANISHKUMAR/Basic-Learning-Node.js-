// // 01 import the https library/modules
//  const https=require('https');
//  //02 Create the Server
//  const server = https.createServer((req,res)=>{
 
//  res.end('Welcome to Node Js Server');
//  })
//  //03 Create the Server Ports
//  const port =process.env.PORT||3000;
//   server.listen(port,()=>{
//           console.log(`Server is running at https://localhost:${port}`);
//   })
// -------------------
// 01 import the http library/module
const http=require('http');

// 02 Create Server
const server=http.createServer((req,res)=>{
    console.log(req.url);
  res.write('Welcome to my Application ')//Add the content
  if(req.url=='/Product'){
  res.end('You are viewing Product Page');
  }
  else if (req.url=='/Users'){
                res.end('You are viewing Users Page');
        }

});
// 03S Specify Server Port
server.listen(3100,()=>{
  console.log('Server is running on port 3100');
});