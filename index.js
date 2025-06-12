// express is a function exported by the Express module.
const express = require('express');
// app is an object — specifically an instance of an Express application.
const app = express();

app.use(express.json());
const courses =
[
    {id:1 , name:'maths'},
     {id:2 , name:'sci'},
      {id:3 , name:'eng'}
];

app.get('/' , (req,res)=>{
    res.send("hello motherfucker!!!!!!!!!!");
});

app.get('/api/courses' ,(req,res)=>
{
     res.send(courses);
});
//Yo, start the HTTP server and listen for traffic.
// A server is a program that listens for client requests and sends back responses, usually over the network.

app.get('/api/courses/:id',(req,res)=>
{
    const course=courses.find(c=>c.id === parseInt(req.params.id));
    if(!course)
    {
        res.status(404).send('fuck you no course for you');
    }
    res.send(course);

});

app.post('/api/courses',(req,res)=>
{
     const course ={
        id: courses.length +1,
        name: req.body.name

     };
     courses.push(course);

     res.send(course);
})


const port = process.env.PORT || 3000;
app.listen(port , ()=>
{
    console.log(`mother fucker i am listenin on port ${port}`);
});


// no ifs we directly use app.get
