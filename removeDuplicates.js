let newArr = []

function duplicates(arr){
  for(let i = 0; i< arr.length; i++){
     if(!newArr.includes(arr[i])){
       newArr.push(arr[i]) //newArr += arr[i] 
     }
  }
  return newArr;
}
console.log(duplicates([1,1,2,2,3,48,8,8,8,9])) // I will be a great programmer in 2024
// happy birthday Dagim. you have changed alot and 2024 will be a year of complete transformation 