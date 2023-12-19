let arr = [2,4,3,2,4,5]

let newArr = []

function duplicates(arr){
   for(let i = 0; i<arr.length; i++){
     if(!newArr.includes(arr[i])){
       newArr.push(arr[i])
     }
   }
  return newArr;
}

console.log(duplicates(arr))