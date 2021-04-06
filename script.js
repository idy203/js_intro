

//#1 string compare

var num2 = 5;

if (num2 == 5){
   console.log("nice!")
} else if (num2 > 10){
   console.log("oops!")
} else{
   console.log("not correct!")
}


//#2 number compare

var num = 45;
if (num ==100){
   alert("perfect!")
 } else if (num <50){
   alert("too small")
} else{
   alert("not quite")
}


//#3 function combine
pizza();
function pizza (){
  console.log("Hi!" + " " + "I like pizza!")
}


//#4 function conditions
var num1 = 2;

pizza1();

function pizza1(num1){
  if (num==1){
    console.log("pineapple")
  }
  else if (num ==2){
    console.log("pepperoni")
  }
  else{
    console.log("plain cheese!")
  }
}



//#5 random words

var array1 = ["red", "orange", "yellow", "green", "blue", "purple"];
var array = array1[Math.floor(Math.random() * array1.length)];
console.log("My favorite color is" + " " + array );
