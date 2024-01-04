newArr = [];

function arrayIntersection(arr1, arr2) {
   if(arr1.length !== arr2.length){
     return newArr;
   }
  for (let i = 0; i < arr1.length; i++) {
   if(arr1[i] === arr2[i]){
     newArr.push(arr1[i])
   }
  }
  return newArr
}
console.log(arrayIntersection([1, 7, 3, 4, 5, 8, 3], [1, 2, 3, 4, 5, 8]));