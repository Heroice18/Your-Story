const express = require('express')
const {spawn} = require('child_process');
const app = express()
const port = 3000
const python2 = spawn('python', ['../Phython/text_generation.py']);

python2.stdout.on('data', (data) => {
console.log("OUT: " + data);
//console.log('OUT2: ${data');
});

python2.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });
  


app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
 var dataToSend;
 // spawn new child process to call the python script
 const python = spawn('python', ['../Phython/text_generation.py']);
 // collect data from script
 python.stdout.on('data', function (data) {
  console.log('Pipe data from python script ...');
  dataToSend = data.toString();
 });
 // in close event we are sure that stream from child process is closed
 python.on('close', (code) => {
 console.log(`child process close all stdio with code ${code}`);
 // send data to browser
 res.send(dataToSend)
 });
 
})
app.listen(port, () => console.log(`Example app listening on port 
${port}!`))