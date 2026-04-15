let arr = [1,"dns",true,"lpu"];

console.log(arr);
arr.shift(1);
arr.unshift(100);

arr.length();

arr.push(21);
arr.pop();
arr.at(1); //Asscessing the values according to index

let arr1 = [1,2,3];
let arr2 = ["dns","pro","som"];
arr.concat(arr1,arr2);

//Map
let nums = [1, 2, 3, 4, 5, 6];
let doubled = nums.map(n => n * 2);
console.log(doubled);

//Filter
let even = nums.filter(n => n % 2 === 0);
console.log(even);

//Find
let result = nums.find(n => n > 4);
console.log(result); 

//Reduce
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

