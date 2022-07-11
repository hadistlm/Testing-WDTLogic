const prompt = require("prompt-sync")({ sigint: true });

let inputArr;
let arrayHolder = [];

while (true) {
  inputArr = parseInt(prompt("Masukan Nilai array (ketik exit untuk berhenti): "));
  // statement
  if (Number.isInteger(inputArr)) {
    arrayHolder.push(inputArr);
    console.log(`Jumlah Array : `, arrayHolder);
  }
  else{
    break;
  }  
}

console.log('Array Mentah : ', arrayHolder);
console.log('Array Bersih : ', [...new Set(arrayHolder)]);