const prompt = require("prompt-sync")({ sigint: true });

const words = prompt("Masukan Kata : ");

let findChar = Array
	.from(words)
	.find((char) => {
		// loop each char and find not reapeted using regex
		return words.match(RegExp(char,'g')).length === 1;
	});

console.log(`Char pertama yang tidak terulang : `, findChar);