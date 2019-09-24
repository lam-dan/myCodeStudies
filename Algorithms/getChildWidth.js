// We have an object that represents a div container, an example is as follows:
// {"width": "500px",
//   "children":[
//    {"width": "200px",
//     "growthFactor": 1,
//     "shrinkFactor": 3
//    },
//    {"width": "200px",
//     "growthFactor": 3,
//     "shrinkFactor": 2
//    },
//    ...
//    ]
// }

// The container has 2 attributes:
// 1. width: a string that represents its width
// 2. children: an array of child elements.
// And each of the container’s children has 3 attributes:
// 1. width: a string that represents its base width
// 2. growFactor: a number that dictates the proportion to grow if necessary
// 3. shrinkFactor: a number that dictates the proportion to shrink if necessary

// The growthFactor and shrinkFactor works as follows:
// 1. growthFactor: if there is extra space in the container, it determines how much the child will grow relative to the rest of the children in the container. (In the given example, the actual width of the first child will be 225px and the second child will be 275px)
//     200px + 200px = 400px
//     container: 500px
//     100px extra space
//     growth: 1 : 3 (25px : 75px)

// 2. shrinkFactor: if there isn’t enough space in the container, it determines how much the child will shrink relative to the rest of the children in the container. (If the parent’s width is 300px then the actual width of the first child will be 140px and the actual width of the second child will be 160px)
//     200px + 200px = 400px
//     container: 300px
//     100px space to shrink
//     shrink: 3 : 2 (60px : 40px)

// Now given you have the container div object, write a function to calculate the nth child’s actual width in the container. (Assume all children are in the same row with the parent containers, n starts with 0)

let widthInformation = {
  width: '500px',
  children: [
    { width: '200px', growthFactor: 1, shrinkFactor: 3 },
    { width: '200px', growthFactor: 3, shrinkFactor: 2 }
  ]
};

// Example:
// childIndex = 0
// output: 225px

// childIndex = 1
// output: 275px

// container: 500px
// 3 childern: 100px, 100px, 100px

// widthInformation.width gives you the element's width,
// widthInformation.children[i].width gives you child[i]’s width, etc.

function getChildWidth(widthInformation, childIndex) {
  // TODO: Implement me
  const currentGrowthFactor = widthInformation.children[childIndex].growthFactor; //1
  let extraSpace = 0;
  let totalGrowthRate = 0; 
  const containerWidth = Number(widthInformation.width.slice(0, -2)); //500
  let totalChildrenWidth= 0;
  for (let i = 0; i < widthInformation.children.length; i++) {
    totalChildrenWidth += Number(widthInformation.children[i].width.slice(0, -2)); //400
    totalGrowthRate += widthInformation.children[i].growthFactor; //4
  }
  extraSpace = containerWidth - totalChildrenWidth; //100
  const rate = extraSpace / totalGrowthRate; //25
  const output = rate * currentGrowthFactor + Number(widthInformation.children[childIndex].width.slice(0, -2));
  return output;
}
// flex box
console.log(getChildWidth(widthInformation, 1));
