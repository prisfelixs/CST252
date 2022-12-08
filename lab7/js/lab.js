function isEven(x){
  return (x%2==0);
}

console.log("Is 1 even?" isEven (1));
console.log("Is 2 even?" isEven (2));

array = [100,81,4,16,42,144,10000]
console.log("My Array",array);

var result = array.map(isEven);

console.log("Test of eveness array:", result);

var result = array.map(function(x){
  return x ** 0.5;

console.log("squareroot of array:",result);
