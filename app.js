const express = require('express');
const app = express();
const path = require('path');
port = 3000;

app.listen(port,() => {
    console.log('Servidor corriendo en el puerto '+ port);
})

 app.get ('/',(req,res) => {
    res.sendFile(path.resolve(__dirname, './images/kakashi.jpg'));
})
/*
app.get ('/html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index.html'));
}) */

/* app.get('/contacto',(req,res)=>{
    res.send('Dejanos tu contacto!');
})

app.get('/un-array',(req,res)=>{
    res.send([1,2,3,4,5]);
}) */

/* app.get('/404',(req,res) => {
    res.send('Error página no encontrada')
});

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'./index.html'))
}); */

