let  vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
function vow(str){
  for(let i = 0; i<= str.length; i++){
    if(vowels.includes(str[i])){
      count++
    }
  }
  return count 
}

console.log(vow("hello"))