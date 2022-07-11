const prompt = require("prompt-sync")({ sigint: true });

const num = prompt("Masukan Nilai : ");

if (isPrime(num)) {
  console.log(`Nomor ${num} adalah bilangan prima`);
}
else{
  console.log(`Nomor ${num} bukan bilangan prima`);
};

function isPrime(num) {
  // if number is negative
  if (num <= 1) return false;
  // number are even
  if (num % 2 == 0 && num > 2) return false;
  // start from 3, stop at the square root, inc in two
  for(let i = 3; i <= Math.sqrt(num); i += 2) { 
    // empty when divided
    if(num % i === 0) return false;
  }
  return true;
};