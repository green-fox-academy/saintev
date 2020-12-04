class Greeter {  
 static fact: number;  
 fact = 1;  
 constructor() {}  
 factorial(num: number): number {  
  if (num > 0) {  
   this.fact = this.fact * num;  
   this.factorial(num - 1);  
  }  
  return this.fact;  
 }  
}  

let counter = 10;
while(counter > 0) {
    console.log(counter--);
}

var countdown = function(value) {
    if (value > 0) {
        console.log(value);
        return countdown(value - 1);
    } else {
        return value;
    }
};
countdown(10);

var factorial = function(number) {
  if (number <= 0) { // terminal case
    return 1;
  } else { // block to execute
    return (number * factorial(number - 1));
  }
};
console.log(factorial(6));
// 720