// function isPalin(str){
//   let clearedStr = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase()

//   if( clearedStr === clearedStr.split("").reverse().join("")){
//     console.log("is palindrome")
//   }
  
    
  
// }

// console.log(isPalin("is palindrome"))

function isPalindrome(str){
  let reversed = ''
  for(let i = str.length; i>=0; i--){
    reversed += str[i]
  }
  if(reversed === str){
    console.log("is palindrome!")
  }
}
