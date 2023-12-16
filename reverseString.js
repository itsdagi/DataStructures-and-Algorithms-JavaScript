// const reverse = (str) =>{
//   return str.split('').reverse().join('')
//   }

// console.log(reverse("hello"))

const reverseString = (str)=>{
  let reversed = ''
  for(let i = str.length - 1; i>=0; i --){
    reversed += str[i]
  }
  return reversed
}

console.log(reverseString("dagim"))