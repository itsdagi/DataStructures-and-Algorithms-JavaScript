let newArr = []

function duplicates(arr){
  for(let i = 0; i< arr.length; i++){
     if(!newArr.includes(arr[i])){
       newArr.push(arr[i]) //newArr += arr[i] 
     }
  }
  return newArr;
}
console.log(duplicates([1,1,23,48,8,8,8,9]))