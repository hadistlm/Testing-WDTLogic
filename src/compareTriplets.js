const prompt = require("prompt-sync")({ sigint: true });

let i = 0;
let arrAtas  = [];
let arrBawah = [];

console.log('\nKetik exit untuk keluar testing');
console.log('Ketik finish untuk selesai meng-input data\n');

while (true) {
  inputAtas = insertAtas(prompt(`Masukan Nilai array (atas) ke-${i}: `));

  if (inputAtas) {
    insertBawah(prompt(`Masukan Nilai array (bawah) ke-${i}: `));

  // exit state
  }else if(inputAtas === false){
    console.log('keluar');
    break;

  // finish input data
  }else if(inputAtas === null){
    console.log('Finish');
    console.log(`\nJumlah Array (atas)`, arrAtas);
    console.log(`Jumlah Array (bawah): `, arrBawah);

    console.log(`Result : `, comparing(arrAtas, arrBawah));
    break;
  }

  i++;
}

function insertAtas(num){
  if (Number.isInteger(parseInt(num))) {
    arrAtas.push(parseInt(num));
    console.log(`\nJumlah Array (atas)`, arrAtas);
    console.log(`Jumlah Array (bawah): `, arrBawah);

    return true;
  }
  else if(num !== 'exit' && num !== 'finish' ){

    let inputVal = prompt(`Masukan Nilai array (atas) ke-${i}: `);
    
    return inputVal !== 'exit' && inputVal !== 'finish' ? insertAtas(inputVal) : (inputVal === 'finish' ? null : false);
  }
  else{
    return num === 'finish' ? null : false
  }
}

function insertBawah(num){
  if (num === 'exit' || num === 'finish') {
    console.log('Array bawah tidak bisa exit jika array atas terisi');
  }

  if (Number.isInteger(parseInt(num))) {
    arrBawah.push(parseInt(num));
    console.log(`\nJumlah Array (atas)`, arrAtas);
    console.log(`Jumlah Array (bawah): `, arrBawah);

    return true;
  }
  else{
    let inputVal = prompt(`Masukan Nilai array (bawah) ke-${i}: `);

    return insertBawah(inputVal);
  }
}

function comparing(a, b){
  let score = [];

  for(let j = 0; j < a.length; j++){
    if(a[j] > b[j] || a[j] < b[j]){
      score[j] = 1;
    } else{
      score[j] = 0;
    }
  }

  return score;
}