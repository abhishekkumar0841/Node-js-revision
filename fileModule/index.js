const fs = require("fs");

console.log('before async');
fs.readFile('input.txt', (err, data)=>{
    if(err){
        console.log('error in read file:', err);
    }
    console.log('data read success: ', data.toString());
})
console.log('after async');

console.log('before sync');
const reading = fs.readFileSync('input.txt')
console.log('reading data:', reading.toString());
console.log('after sync');

//creating buffer instance
const buf = new Buffer.alloc(1024)

fs.open('input.txt', 'r+', (err, fd)=>{
    if(err){
        console.log('error in opening file:', err);
    }
    console.log('file open');
    console.log('checking fd:', fd);

//****//fd--> file descriptor //buf--> here to put file after reads //0--> offset, it write from starting position to write something in buffer //buf.length--> how much data to put in buffer, here total //0--> it reads from starting or initial position //
fs.read(fd, buf, 0, buf.length, 0, function(e, bytes){
    if(e){
        console.log("Error in reading file: ", e);
    }
    console.log("Bytes:", bytes);
    console.log("Data after open and reads file:", buf.slice(0, bytes).toString());
})

//closing the file **this is compulsory here because here first open the file, if we not explicetly open the file or simply do write or read file directly then the file is close automatically but if we open file then we have to close it.
    fs.close(fd, (error)=>{
        if(error){
            console.log("Error while closing the file:", err);
        }else{
            console.log("File closed successfully");
        }
    })
})

//***Writing over to a file**** */
fs.writeFile('input.txt', "I write successfully", (err)=>{
    if(err){
        console.log("Error while writing in the file:", err);
    }
    console.log("Successfully Writing over to a file");
})

//********Appending to a file******** */
fs.appendFile('input.txt', " Ye Bhi Append Ho Gaya", 'utf-8', (err)=>{
    if(err){
        console.log('Error while appending something to file:', err);
        return err
    }
    console.log("Appended in file successfully");
})

//***Deleting the using unLink**** */
fs.unlink('input.txt', (err)=>{
    if(err){
        console.log("Error while deleting (unlinking) file");
    }else{
        console.log("File deleted successfully");
    }
})

// *******Create file*********
fs.writeFile("input4.txt", "This is 4th file", "utf-8", (err) => {
  if (err) {
    console.log("Error while creating file", err);
    return;
  }
  console.log("File created successfully");
});

// ********creating multiple files*********
const filesAre = [
  { name: "file1.txt", content: "This is file one" },
  { name: "file2.txt", content: "This is file two" },
  { name: "file3.txt", content: "This is file three" },
  { name: "file4.txt", content: "This is file four" },
  { name: "file5.txt", content: "This is file five" },
];

filesAre.forEach((file) => {
  fs.writeFile(file.name, file.content, "utf-8", (err) => {
    if (err) {
      console.log(`Error while creating ${file.name} file`, err);
    } else {
      console.log(`Created Files are: ${file.name}`);
    }
  });
});
