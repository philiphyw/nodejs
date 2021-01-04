//if the data is very big, use stream to transfer data a small part(buffer) at a time
 const fs = require('fs');


 //read stream
 const readStream = fs.createReadStream('./txts/bigfile.txt','utf-8');
const writeStream = fs.createWriteStream('./txts/newbigfile.txt')

 //set a listener for read stream.
 let chuckNum=0;
 readStream.on('data',(dataChuck)=>{
     console.log('New data chuck starts');
     chuckNum++;
     console.log(dataChuck)
    //  //write stream
    //  writeStream.write('\n\n\n\n New Chuck \n\n\n\n');
    //  writeStream.write(dataChuck);
    //use read stream .pipe() function to  transfer data from a readable stream to a writable stream line

    readStream.pipe(writeStream)
     console.log(`there're totally ${chuckNum} chunks in this transition.`)
 })



 