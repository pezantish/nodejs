// const http = require('http');
const morgan = require('morgan');
const express = require('express');

//const host = 'localhost';
const port = 3000;
const app = express();

app.use(morgan('dev'));

//TASK 2: ERROR
public = __dirname + '/public';
app.use(express.static(public));

app.get('/', (req, res) => {
    res.send('Greetings');
});

//TASK 1
app.get('/hello', (req, res) => {
    res.send('Hello');
});

app.get('/world', (req, res) => {
    res.send('World');
});
//END

//TASK 3: UNFINISHED
app.post('/universe', (req, res) => {
    res.send('World');
});


const server = app.listen(port, () => {
    //server.address().address is host
    console.log(`Server up on ${server.address().address}:${port}`);
});

console.log("It's ALIVE!");