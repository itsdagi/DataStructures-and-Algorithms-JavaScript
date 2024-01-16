function arrayIntersection(arr1, arr2){
 let newArr = [];
 
  for(let i = 0; i < arr1.length; i++){
     if(arr2.includes(arr1[i])){
       newArr.push(arr1[i]);
     }
  }
  return newArr
}
console.log(arrayIntersection([1,2,3,4,5,7], [1,2,3,4,5,6]))

// array intersection 
