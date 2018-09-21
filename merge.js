function merge(array1,array2){
  var swapped = true;
  var bigArray = [];

  for(var i = 0; i < array1.length; i ++){
    bigArray.push(array1[i]);
  }

  for(var j = 0; j < array2.length; j ++){
    bigArray.push(array2[j]);
  }

  while(swapped == true){
    swapped = false;
    for(var k = 0; k < bigArray.length; k++){
      if(bigArray[k] > bigArray[k+1]){
        var temp = bigArray[k];
        bigArray[k] = bigArray[k+1];
        bigArray[k+1] = temp;
        swapped = true;
      }
    }
  }

  return bigArray;
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
