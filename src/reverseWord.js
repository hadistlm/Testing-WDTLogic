const prompt = require("prompt-sync")({ sigint: true });

const words = prompt("Masukan Kata : ");

let transform = words
	.split(' ') // explode by space
	.map(word => {
		// split each word and reverse order then join them again
		return word.split('').reverse().join('');
	});

// print result
console.log(`Result : `, transform.join(' '));