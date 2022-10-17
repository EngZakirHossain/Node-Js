const getName= () => {
    return  "Zakir Hossain"
}
const getAge= () => {
    return  "25"
}
const cgpa ='3.59';
//single data sent to index
// exports.getName = getName();
// exports.getAge = getAge();
// exports.result = cgpa;

//send data using module

module.exports = {
    getAge,
    getName,
    cgpa
}