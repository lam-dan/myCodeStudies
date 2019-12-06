// Given an array of elements and delay time, write a function to return each element's index every 5 seconds
function resolveAfter5Seconds(index, item, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(index, item);
    }, delay);
  });
}

items = ['cost', 'profit', 'product'];

async function asyncCall(items, delay) {
  for (let i = 0; i < items.length; i++) {
    let result = await resolveAfter5Seconds(i, items[i], delay);
    console.log(result);
  }
}

asyncCall(items, 5000);
