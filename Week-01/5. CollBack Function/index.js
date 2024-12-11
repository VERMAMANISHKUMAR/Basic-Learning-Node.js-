function callback(){
         
          console.log("this is my second function");
         
}

const add = function(a,b,callback)
{
        
          var result=a+b;
          console.log("this is my main function = "+result)//main function work is complete
          callback()//after run the seconde function
}
add(10,50,callback)