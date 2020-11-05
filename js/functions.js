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
function askLimitedNumbers(length){
  var array = [];
  for (var i = 0; i < length; i++) {
    array[i] = parseInt(prompt('Inserisci il numero: '));
  }
  return array;
}

function compareArraysByPosition(arrayOne,arrayTwo){
  var booleanArray = [];
  if(arrayOne.length === arrayTwo.length){
    for (var i = 0; i < arrayOne.length; i++) {
      booleanArray[i] = (arrayOne[i] === arrayTwo[i]);
    }
  }
  return booleanArray;
}
