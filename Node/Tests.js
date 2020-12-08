const express = require('express')
const {spawn} = require('child_process');
const app = express()
const port = 3000
const python2 = spawn('python', ['../Phython/text_generation.py']);

const util = require('util');
const bodyParser = require('body-parser');


python2.stdout.on('data', (data) => {
console.log("OUT: " + data);
//console.log('OUT2: ${data');
});

python2.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });
  
  app.use(bodyParser.urlencoded({ extended: false }));
  
var aiPath = "";
var userData = "";

app.post('/', function(req, res){
  res.setHeader('Access-Control-Allow-Origin', "*");
 // console.log("POSTING RES:  " + util.inspect(req, false, null, true));
  console.log("POSTING REQ:  " + JSON.stringify(req.body));
  var tempPath = JSON.stringify(req.body);
  var path = JSON.parse(tempPath);
  var pathFile = path.path;
  userData = path.userInput;

  aiPath = pathFile;
  console.log("HERE ARE THE DATA: " + userData +" " + pathFile);

  console.log("POSTING REQ:  " + JSON.stringify(res.body));



});

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
 var dataToSend;
 // spawn new child process to call the python script
 
 console.log("REQUEST: " + JSON.stringify(req.body));
 console.log("RES: " + JSON.stringify(res.body));

 req.on('data', function (chunk) {
  console.log('GOT DATA! ' + chunk);
 });
 console.log("JUST TESTING: " + aiPath);
 const python = spawn('python', [aiPath, userData]);
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