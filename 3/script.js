const firstElement = (arr, n) => {
 if(arr == null) {
  return void 0;
 }
 if(n == null) {
  return arr[0];
 }
 if(n < 0) {
  return [];
 }
 return arr.slice(0, n);
}

console.log(firstElement([7, 9, 0, -2]));
console.log(firstElement([],3));
console.log(firstElement([7, 9, 0, -2],3));
console.log(firstElement([7, 9, 0, -2],6));
console.log(firstElement([7, 9, 0, -2],-3));