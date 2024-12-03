//import the http library/module
const http=require('http');
const fs=require('fs');
// create a server
const server=http.createServer((req,res)=>{
          const data=fs.readFileSync('index.html').toString()
          res.end(data)
})

// specify server port
server.listen(3500)
          console.log('Server is running on port 3500');
