function calculator(a,b,op){
  switch(op){
       case "+":
          return a+b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":  
    if(b !== 0){
      
      return a/b;
    }
  else{
    console.log("You Devided By Zero")
  };
  
  }
}

const calc = calculator(5000,10,"*")
console.log(calc)
