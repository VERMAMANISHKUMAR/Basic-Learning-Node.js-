function callback(){
         
          console.log("this is my second function");
         
}

const add = function(a,b,callback)
{
        
          var result=a+b;
          console.log("this is my main function = "+result)
          callback()
}
add(10,50,callback)