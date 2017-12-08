//Team Jerri-- Bayan Berri, Ibnul Jahan
//SoftDev1 pd7
//HW15 -- Sequential Progression
//2017-12-07   


//_________________________FIBONACCI FUNCTION_________________________//

//returns the nth term in the Fibonacci number sequence
var fibonacci= function(n){
    if(n<0){
	return "Sorry, you cannot find a negative fibonacci term";
    };
    if(n==0){
	return 0;
    };
    if(n==1){
	return 1;
    };
    return fibonacci(n-1)+fibonacci(n-2);
};

//TEST CASE//
console.log("THESE ARE CALLS OF THE FUNCTION FIBONACCI");
console.log("fibonacci(0) -> " + fibonacci(0));
console.log("fibonacci(1) -> " + fibonacci(1));
console.log("fibonacci(2) -> " + fibonacci(2));
console.log("fibonacci(3) -> " + fibonacci(3));
console.log("fibonacci(4) -> " + fibonacci(4));
console.log("fibonacci(-5) -> " + fibonacci(-5));
console.log("")


//_________________________GCD FUNCTION_________________________//
//returns the greatest common denominator between two numbers
var gcd= function(a,b){
  a= Math.abs(a);
  b=Math.abs(b);
  if(b>a){
    var temp=a;
    a=b;
    b=temp;

  };
  while(true){
    if(b==0){
      return a;
    };
    a=a%b;
    if(a==0){
      return b;
    }
    b=b%a;
  };
};

console.log("THESE ARE CALLS OF THE FUNCTION GCD");
console.log("gcd(0,10) -> " + gcd(0,10));
console.log("gcd(0,0) -> " + gcd(0,0));
console.log("gcd(15,20) -> " + gcd(15,20));
console.log("gcd(7,5) -> " + gcd(7,5));
console.log("gcd(31,13) -> " + gcd(31,13));
console.log("gcd(0,6666) -> " + gcd(0, 6666));
console.log("");


//_________________________RANDOMSTUDENT FUNCTION__________________________//

var list=['bayan','bob','balloon','barbie','blue','bootstrap','bees','bright', 'bubbles'];

//camelCase (wooo) because we back in java syntax
//returns a random name from a specified list
var randomStudent=function(list){
    var length=list.length;
    //Math.floor rounds to the highest integer that is less than or equal to its input
    return list[Math.floor(Math.random()*length)];
};

console.log("THESE ARE CALLS OF THE FUNCTION RANDOMSTUDENT");
console.log("randomStudent(list) -> " + randomStudent(list));
console.log("randomStudent(list) -> " + randomStudent(list));
console.log("randomStudent(list) -> " + randomStudent(list));
console.log("randomStudent(list) -> " + randomStudent(list));
console.log("This was the list: " + list);
console.log("");


//------------------------------PHASE 2--------------------------//


//THESE ARE THE GENERIC BUTTON CALLBACK FUNCTIONS
var buttonCallback = function(e){
    console.log("\n\nhere comes e...");
    console.log(e);
    console.log("\n\nhere comes 'this'...");
    console.log(this);
};
var b = document.getElementById('b');
b.addEventListener('click', buttonCallback);


//Now, for our phase 1 functions

//Callback button for fibonacci
//Returns a random fibonacci number between 4 and 43
var fibCallback = function(e){
    //the only reason for the + 4 is because every number 4 and higher is followed by a 'th term'
    var nthTerm = Math.floor(Math.random()*40) + 4;
    console.log("\nThis is the " + nthTerm + "th term of the Fibonacci sequence");
    console.log("fibonacci(" + nthTerm + ") -> " + fibonacci(nthTerm));
};
//Event listener for fibonacci
var fibButton = document.getElementById('fibonacci');
fibButton.addEventListener('click', fibCallback);

//Callback button for gcd
//Returns the gcd between 2 random numbers between 1 and 500
var gcdCallback = function(e){
    //these are the two numbers
    var a = Math.floor(Math.random()*500);
    var b = Math.floor(Math.random()*500);
    console.log("\nThis is the GCD of " + a + " and " + b);
    console.log("gcd(" + a + "," + b + ") -> " + gcd(a,b));
};
//Event listener for GCD
var gcdButton = document.getElementById('gcd');
gcdButton.addEventListener('click', gcdCallback);

//Callback button for randomStudent
//Returns 1 (one) random name from the list
var randStudentCallback = function(e){
    console.log("\nHere is a random name from this list: " + list);
    console.log("randomStudent(list) -> " + randomStudent(list));
};
//Event listener for randStudent
var randStudentButton = document.getElementById('randomStudent');
randStudentButton.addEventListener('click', randStudentCallback);



//SIGNING OFF
console.log("This has been a production by Bayan & Ibnul");
