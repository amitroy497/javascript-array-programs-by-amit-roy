const arrayClone = (arr) => {
 return arr.slice(0);
}

console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));