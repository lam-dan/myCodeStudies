// Write a function to reverse any number
function get_reverse_of_int(int) {
  let remainder = 0;
  let lastNumber;
  let negative;
  if (int < 0) {
    int = int * -1;
    negative = true;
  }

  let intLength = Math.ceil(Math.log10(int + 1));

  for (let i = intLength; i > 0; i--) {
    lastNumber = int % 10;
    remainder += lastNumber * Math.pow(10, i - 1);
    int = Math.floor(int / 10);
  }
  return negative ? remainder * -1 : remainder;
}

console.log(get_reverse_of_int(123456789));
