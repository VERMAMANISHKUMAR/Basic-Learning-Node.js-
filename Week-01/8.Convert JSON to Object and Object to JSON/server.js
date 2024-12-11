const JSONstringdata=`{"Name":"manish verma","fatherName":"Krishna Show","Contect":8521837619,"age":24,"addares":"Uttar Pragesh Ghazibad","Qduction":"Diploma"}`
const jsonobject=JSON.parse(JSONstringdata)//convert the date JSONstring to Object
console.log(jsonobject)

//this Object Data I am Convert the Object to JSONString
const Addares={
          Name:"manish verma",
          fatherName:"Krishna Show",
          Contect:8521837619,
          age:24,
          addares:"Uttar Pragesh Ghazibad",
          Qduction:"Diploma"
}
const jsonstring=JSON.stringify(Addares)
console.log(jsonstring)