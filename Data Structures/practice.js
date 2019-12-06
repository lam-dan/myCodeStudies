var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

var totalYears = pilots.reduce(function (accumulator, pilot) {
  console.log(accumulator, pilot);
  return accumulator + pilot.years;
}, 0);

var mostExpPilot = pilots.reduce(function (oldest, pilot) {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
//   console.log(totalYears);

console.log(mostExpPilot);

function list_sum_recursive(arr) {
  // Base case
  if (arr.length === 0) {
    return 0
  }
  // Recursive case
  // Decompose the original problem into simpler instances of the same problem
  // by making use of the fact that the input is a recursive data structure
  // and can be deﬁned in terms of a smaller version of itself
  else {
    let head = arr[0];
    let smaller_list = arr.slice(1, arr.length);
    return head + list_sum_recursive(smaller_list)
  }
}
console.log(list_sum_recursive([1, 2, 3]))


let users = [
  {
    loginId: 1111,
    firstName: 'Daniel',
    lastName: 'Lam',
    email: 'danlam@ucdavis.edu',
    phone: '925-922-7579'
  },
  {
    loginId: 2222,
    firstName: 'James',
    lastName: 'Vu',
    email: 'whatever@ucdavis.edu',
    phone: '911'
  }
]

let logins = [
  {
    _id: 1111,
    type:9
  },
  {
    _id: 2222,
    type:10
  }
]

let results = {};

for (let user of users) {
  results[user.loginId] = JSON.parse(JSON.stringify(user));
}

console.log(results)

for (let login of logins) {



  results[login._id]['type'] = login.type;

}

console.log(results)