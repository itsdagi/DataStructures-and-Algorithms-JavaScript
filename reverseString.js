// function reversed(str){
//  return str.split('').reverse().join(""); 
// }
// console.log(reversed("hello"))

const reversed=(str)=> {
  let  reversed = " ";
   for(let i = str.length -1; i >=0; i--){
     reversed += str[i];
   }
  return reversed;
}

console.log(reversed("dagim"))

// write a reverse string without methods

