//all data fetch
const students = require("./exports_require");
//single data fetch
const {getName} = require("./exports_require");

//single data fetch
console.log(students.getName());
console.log(students.getAge());
console.log(students.cgpa);

console.log(getName());

