var randomNumbers = [];
var N_RANDOM = 5;
var N_MAX = 100;
var N_MIN = 0;

//genero 5 numeri random in un array;
randomNumbers = nRandomIntNumbersToMax(N_RANDOM,N_MIN,N_MAX);
console.log(randomNumbers);

//visualizzo i numeri a schermo
alert(randomNumbers);

//con la visualizzazione parte il timer
setTimeout(askLimitedNumbers,5000);

function askLimitedNumbers(N_RANDOM){
  for (var i = 0; i < N_RANDOM; i++) {
