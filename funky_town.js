var fibonacci= function(n){
  if(n==0){
    return 0;
  };
  if(n==1){
    return 1;
  };
  return fibonacci(n-1)+fibonacci(n-2);
};

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
}
