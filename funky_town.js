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



//SIGNING OFF
console.log("This has been a production by Bayan & Ibnul");
