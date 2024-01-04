function arrIntersection(arr1, arr2){

  let newArr = []
  if(arr1.length !== arr2.length){
      return newArr;
  }
  for( let i = 0; i < arr1.length; i++){
      if(arr1[i] === arr2[i]){
          newArr.push(arr1[i])
      }
  }
  return newArr;
}

console.log(arrIntersection([1,7,3,4],[1,2,3,4]))

// array intersection 