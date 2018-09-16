function range(start,end,step){

  var array = [];
  var numCounter = start;

  if(start == null || end == null || step === null || start > end || step < 0){
    return array;
  }
  else{
    while(numCounter <= end){

      array.push(numCounter);
      numCounter += step;

    }
  }
    return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));