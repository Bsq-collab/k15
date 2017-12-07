var fibonacci= function(n){
  if(n==0){
    return 0;
  };
  if(n==1){
    return 1;
  };
  return fibonacci(n-1)+fibonacci(n-2);
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));

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

console.log(gcd(0,10));
console.log(gcd(0,0));
console.log(gcd(15,20));
console.log(gcd(7,5));
console.log(gcd(31,13));
console.log(gcd(0, 6666));


var list=['bayan','bob','balloon','barbie','blue','bootstrap','bees','bright', 'bubbles'];

var randomStudent=function(list){
  var length=list.length;
  return list[Math.floor(Math.random()*length)];
};

console.log(randomStudent(list));
console.log(randomStudent(list));
console.log(randomStudent(list));
console.log(randomStudent(list));
