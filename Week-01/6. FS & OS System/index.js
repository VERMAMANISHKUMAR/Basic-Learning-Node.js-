var fs=require("fs")
var os=require("os")

var user=os.userInfo();
console.log(user)
console.log(user.username);

fs.appendFile('greeting.text','Hello' + user.username+'!\n',()=>{console.log("File is Created")});
