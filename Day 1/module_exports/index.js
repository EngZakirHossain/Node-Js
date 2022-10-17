//all data fetch
const students = require("./module_exports_require");
//single data fetch
const {getName} = require("./module_exports_require");

//single data fetch
console.log(students.getName());
console.log(students.getAge());
console.log(students.cgpa);

console.log(getName());

