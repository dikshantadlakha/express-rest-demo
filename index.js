// express is a function exported by the Express module.
const express = require('express');
// app is an object — specifically an instance of an Express application.
const app = express();

app.get('/' , (req,res)=>{
    res.send("hello motherfucker!!!!!!!!!!");
});

app.get('/api/courses' ,(req,res)=>
{
     res.send([1,2,3]);
});
//Yo, start the HTTP server and listen for traffic.
// A server is a program that listens for client requests and sends back responses, usually over the network.

app.listen(3000 , ()=>
{
    console.log("mother fucker i am listenin on port 3000");
});


// no ifs we directly use app.get
