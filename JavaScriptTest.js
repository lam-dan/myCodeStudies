let questions = [
  {
    text: '10 % of 1 is equal to?',
    choices: ['A. 0.1', 'B. 3', 'C. 4', 'D. 5'],
    category: 'easy'
  },
  {
    text: '10 % of 2 is equal to?',
    choices: ['A. 0.2', 'B. 3', 'C. 4', 'D. 5'],
    category: 'easy'
  },
  {
    text: '10 % of 3 is equal to?',
    choices: ['A. 2', 'B. 0.3', 'C. 0.4', 'D. 5'],
    category: 'easy'
  },
  {
    text: '10 % of 4 is equal to?',
    choices: ['A. 2', 'B. 3', 'C. 0.4', 'D. 5'],
    category: 'easy'
  },
  {
    text: '10 % of 5 is equal to?',
    choices: ['A. 2', 'B. 3', 'C. 4', 'D. 0.5'],
    category: 'medium'
  },
  {
    text: '10 % of 6 is equal to?',
    choices: ['A. 2', 'B. 3', 'C. 4', 'D. 0.6'],
    category: 'hard'
  },
  {
    text: '10 % of 7 is equal to?',
    choices: ['A. 2', 'B. 3', 'C. 0.7', 'D. 0.5'],
    category: 'medium'
  },
  {
    text: '10 % of 8 is equal to?',
    choices: ['A. 2', 'B. 0.8', 'C.4', 'D. 0.6'],
    category: 'hard'
  },
  {
    text: '10 % of 9 is equal to?',
    choices: ['A. 0.1', 'B. 0.9', 'C. 4', 'D. 5'],
    category: 'easy'
  }
];

function shuffle(arr, easyCounter, medCounter, hardCounter) {
  let counter = arr.length,
    temp,
    i;
  let outputQuestions = [];
  //shuffle the pool of arr
  while (counter) {
    i = Math.floor(Math.random() * counter--);
    temp = arr[counter];
    arr[counter] = arr[i];
    arr[i] = temp;
  }

    for(let j=0; j<arr.length; j++) {

      if(!easyCounter   && !medCounter  && !hardCounter ) {
        console.log('65')
        return outputQuestions;
      }
      else if(arr[j].category === "easy" && easyCounter) {
        outputQuestions.push(arr[j]);
        easyCounter--;
      }
      else if(arr[j].category === "medium" && medCounter) {
        outputQuestions.push(arr[j]);
        medCounter--;
      }
      else if(arr[j].category === "hard" && hardCounter) {
        outputQuestions.push(arr[j]);
        hardCounter--;
      }
  }

  console.log('82')
  return false;

  // let j = 0;
  // while (easyCounter || medCounter || hardCounter ) {
  //   if (arr[j].category === 'easy' && easyCounter) {
  //     outputQuestions.push(arr[j]);
  //     easyCounter--;
  //   } else if (arr[j].category === 'medium' && medCounter) {
  //     outputQuestions.push(arr[j]);
  //     medCounter--;
  //   } else if (arr[j].category === 'hard' && hardCounter) {
  //     outputQuestions.push(arr[j]);
  //     hardCounter--;
  //   }
  //   j++;
  // }
  // return outputQuestions;
}

console.log(shuffle(questions, 1, 2, 2));

// foo = 1;
// (function() {
//     foo = 2;
// })();
// var x = function () {
//     foo = 3;
// };
// (function() {
//     var foo = 4;
// })();
// console.log(foo);