function nRandomIntNumbersToMax(length,min,max){
  var array = [];
  min = Math.ceil(min);
  max = Math.floor(max);
  for (var i = 0; i < length; i++) {
     array[i] = Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
  };
  return array;
}

// function askLimitedNumbers()
