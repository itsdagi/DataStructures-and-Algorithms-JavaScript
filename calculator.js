function calc(a,b){
  switch(op){
    case "+":
      return a+b;
    case "-":
      return a-b;
    case "*":
      return a*b;
    case "/":
    if(b!==0){
      return a/b;
    }
      else{
        console.log("Error: Division by zero");
      }
  }
}

console.log(calc(23,8))