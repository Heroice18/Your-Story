export function textPass()
{
const http = require('http');

const server = http.createServer(function getPred(req, res){

    res.setHeader('Content-type', 'application/json');
    res/setHeader('Access-Control-Allow-Origin', "*");
    
    
    res.writeHead(200); //Status Code


    let dataObject = {"id":1234, "name": "BOB", "email":"ASASAS"};
    let data = JSON.stringify(dataObject);

    res.end(data);

});

server.listen(1234, function(){
    console.log("listening on port");

})
return "Working";
}
