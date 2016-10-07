//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var PORT1=7000;
var PORT2=7500;




//We need a function which handles requests and send response


// server 1 says something nice
function handleRequest1(request, response){
    response.end('You are beautiful!');
}


// server 2 says something mean
function handleRequest2(request, response){
    response.end('You are one ugly mofo!');
}





//Create a server
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

//Lets start our server
server1.listen(PORT1, function(){

    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT2);
});

server2.listen(PORT2, function(){

    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT2);
});

