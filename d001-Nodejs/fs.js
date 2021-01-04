const fs = require('fs');

let content='';

for (let index = 0; index < 100; index++) {
    content+= `this is the line ${index + 1}\n`
    
}

//write file
/*
fs.writeFile('dummyData.txt',content,(err)=>{
    if (err) throw err;
    console.log('file has been written');
});
*/


//read file
fs.readFile('./dummyData.txt','utf8', (err,data) => {
    if (err) throw err;
    data = data.toUpperCase();
    const inRegex = /IS/gm;
    data=data.replace(inRegex,'is');//data=data.replace("IS",'is') doesn't work..
    console.log(data);
})
