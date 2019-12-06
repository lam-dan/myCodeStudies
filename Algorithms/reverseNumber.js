// Write a function to reverse any number
function get_reverse_of_int(int) {
	let remainder = 0
	let lastNumber
	let negative

	if (int < 0) {
		int = int * -1
		negative = true
	}

	while (int) {
		lastNumber = int % 10
		int = Math.floor(int / 10)
		remainder = remainder * 10 + lastNumber
	}

	return negative ? remainder * -1 : remainder
}

console.log(get_reverse_of_int(123456789))
