// fs modules default function writeFile(),AppendFile(),readFile(),
// rename(), Unlink(), Exists().

//create new file and add data

const fs = require('fs');
// fs.writeFile('Demo.txt','My Name Zakir', (error)=>{
//     if (error){
//         console.log(error)
//     }else {
//         console.log('Data Write successful')
//     }
// })
//Add new data to exiting file
// fs.appendFile('Demo.txt','Hossain', (error)=>{
//     if (error){
//         console.log(error)
//     }else {
//         console.log('Data Append successful')
//     }
// })
//Read data to exiting file
// fs.readFile('Demo.txt','utf-8', (error,data)=>{
//     if (error){
//         console.log(error)
//     }else {
//         console.log(data)
//     }
// })
//rename data to exiting file
// fs.rename('Demo.txt','Demo1.txt', (error)=>{
//     if (error){
//         console.log(error)
//     }else {
//         console.log('Rename successful')
//     }
// })
//Delete file to exiting file
// fs.unlink('Demo.txt', (error)=>{
//     if (error){
//         console.log(error)
//     }else {
//         console.log('Delete successful')
//     }
// })
//Delete file to exiting file
fs.unlink('Demo.txt', (error)=>{
    if (error){
        console.log(error)
    }else {
        console.log('Delete successful')
    }
})

//for use syc method just remove the function and use sys like unlinksys
