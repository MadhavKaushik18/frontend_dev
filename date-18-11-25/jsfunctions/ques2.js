

// Function that accepts an array + an operation
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}


const double = (n) => n * 2;


const square = (n) => n * n;
const nums = [1, 2, 3, 4];

console.log("Double:", applyOperation(nums, double));
console.log("Square:", applyOperation(nums, square));
