// Write a function to reverse a number

function get_reverse_of_int(int) {
  let remainder = 0;
  let lastNumber;
  let intLength = int % 10;
  for (let i = intLength; i > 0; i--) {
    lastNumber = int % 10;
    remainder += lastNumber * Math.pow(10, lastNumber - 1);
    int = Math.floor(int / 10);
  }
  return remainder;
}

console.log(get_reverse_of_int(1234567));

