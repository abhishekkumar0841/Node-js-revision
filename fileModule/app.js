// ********reads file using EXEC*********
const {exec} = require('child_process')

exec('dir', (err, stdout, stderr)=>{
    if(err){
        console.log("Error in exec", err);
    }

    if(stderr){
        console.log(`Command stderr: ${stderr}`);
    }

    console.log("Files in the current directory:");
    console.log(stdout);
})