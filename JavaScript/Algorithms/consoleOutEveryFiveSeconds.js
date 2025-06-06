items = ['cost', 'profit', 'product'];

// Given an array of elements and delay time, write a function to return each element's index every 5 seconds

// Solution #1: Convert function to async with helper function that has a promise and
// use await to console log the result
// function resolveAfter5Seconds(index, item, delay) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(index, item);
//     }, delay);
//   });
// }

// async function asyncCall(items, delay) {
//   for (let i = 0; i < items.length; i++) {
//     let result = await resolveAfter5Seconds(i, items[i], delay);
//     console.log(result);
//   }
// }

// asyncCall(items, 5000);

// Solution #2: Multiply delay by index, account for index 0 since that will console log
// immediately
// const delayLoop = (items, delay) => {
//   for (let i = 0; i < items.length; i++) {
//     setTimeout(() => {
//       console.log(i, items[i]);
//     }, (i ? i + 1 : 1) * delay);
//   }
// };

// delayLoop(items, 5000);

// Solution #3: Convert the function to async and use a promise with await for it
async function asyncCall(items, delay) {
  for (let i = 0; i < items.length; i++) {
    let result = await new Promise(resolve => {
      setTimeout(() => {
        resolve(i, items[i]);
      }, delay);
    });
    console.log(result);
  }
}

asyncCall(items, 5000);
