var randomNumbers = [];
var userNumbers = [];
var outcomeComparison = [];
var N_RANDOM = 5;
var N_MAX = 100;
var N_MIN = 0;
var hasWin = true;

//genero 5 numeri random in un array;
randomNumbers = nRandomIntNumbersToMax(N_RANDOM,N_MIN,N_MAX);
console.log(randomNumbers);

//visualizzo i numeri a schermo
alert(randomNumbers);

//con la visualizzazione parte il timer
setTimeout(function(){
  userNumbers = askLimitedNumbers(N_RANDOM);
  console.log(userNumbers);
  outcomeComparison = compareArraysByPosition(randomNumbers,userNumbers);
  console.log(outcomeComparison);

  for (var i = 0; i < outcomeComparison.length; i++) {
    if(outcomeComparison[i] === false){
      hasWin = false;
    }
  }

  //comparo due array della medesima lunghezza e ricavo un array booleano
  //su cui costruisco il messaggio di vittoria(sequenza e numeri necessari)

  if(hasWin === true){
    $('#text').text('VICTORY');
  } else {
    $('#text').text('LOSS');
  }


},1000);
