// export function textPass()
// {
const http = require('http');


//import http from 'http';
const server = http.createServer(function getPred(req, res){

    //res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', "*");
    
    
    res.writeHead(200); //Status Code


    
    console.log("PATH: " + process.cwd());

    //res.end(data);

});

server.listen(1234, function(){
    console.log("listening on port");

    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python',["./Python/test.py"]);

    // let dataObject = {"id":1234, "name": "BOB", "email":"ASASAS"};
    // let data = JSON.stringify(dataObject);

    pythonProcess.stdout.on('data', (dataer) => {
        // Do something with the data returned from python script
    console.log("HERE IS: " + dataer);
    });

})
// return "Working";
// }
