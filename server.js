const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello World")});

app.get('/bam', (req,res) => {res.send("Hello Bam")});
app.get('/izak', (req,res) => {res.send("Hello Izak")});
app.get('/eric', (req,res) => {res.send("Hello Eric")});
app.get('/arianne', (req,res) => {res.send("Hello Arianne")});

app.listen(port, ()=>console.log("Listening"));