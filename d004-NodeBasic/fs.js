const { ifError } = require("assert");
const fs = require("fs");
const path = require("path");

//read files
//this function take 3 paras, 1st is the filename of  the file
//the 2nd para is encoding standard, without it, the readed data will just show in unicode like following:
/*
    <Buffer 43 6f 6e 74 65 6e 74 20 69 6e 20 74 68 65 20 31 2e 74 78 74 20 
            66 69 6c 65 0d 0a 0d 0a 0d 0a 0d 0a 45 76 65 6e 74 73 23 0d 0a 53 74 61 62 69 6c 69 74 ... 2964 more bytes>
    */
// //the 3rd para is a callback function, which also take 2 paras, one is error and the other is the readed data from the file.
// let fileOneData = "";

// fs.readFile("./txts/1.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
//   fileOneData = data;
// });

// console.log(
//   "even this text is after the readfile command, but it will be executived without waitting the readfile to return the result"
// );

// //writing file
// fs.writeFile(
//   "./txts/newcreated.txt",
//   "I will copy the data from 1.txt:\n" + fileOneData,
//   (err) => {
//     if (err) {
//       console.log("Error in writing data.");
//     }
//     console.log("Data has been successfully written.");
//   }
// );


// //delete file
// let targetFile = './txts/toBeDeleted.txt';
// if (fs.existsSync(targetFile)) {
//     fs.rm(targetFile,(err)=>{
//         if (err) {
//          console.log(err);  
//         }
//         console.log(`The file ${targetFile} has been deleted.`)
//     }        
//     ) 
// }else{
//     fs.writeFile(targetFile,'This file will be created and deleted',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log(`The file ${targetFile} has been created`)
//     })
// }

//directories

//check if a folder is existed. if yes, delete it. if no, then create it.
// const targetFolder = './newCreatedFolder';
// if(fs.existsSync(targetFolder)){//we need to use Sync function, so we can verify if the folder is existed meanwhile prevent the folder creation/deletion code being executived before the verificaiton complete
//     fs.rmdir(targetFolder,(err)=>{
//         if (err) {
//             console.log(err)
//         }
//         console.log(`The folder ${targetFolder} has been sucessfuly deleted`)
//     })
// }
// else{
//     fs.mkdir(targetFolder,(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log(`The folder ${targetFolder} has been sucessfuly created`)
//     })
// }