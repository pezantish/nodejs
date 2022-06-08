//Import modules
const http = require('http');
const url = require('url');
const fs = require('fs').promises;

//Set-up details
const hostname = 'localhost';
const port = 3000;

//inits for later use
let index;

//USING JSON or html lines
// const requestHandler = (req, res) => {
//     let obj = { "name": "fred", "message": "hello" };
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/json');
//     res.end(JSON.stringify(obj));
//     // res.setHeader('Content-Type', 'text/html');
//     // res.end('<html><head><title>HTML Response</title></head><body><h1>Example HTML response</h1></body></html>');
// }
function okStatus(html, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
}

const requestHandler = (req, res) => okStatus(index, res);

//Creates a server with request handler
const server = http.createServer(requestHandler);

//function for neatness, may be bad habit
let listen = () => server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})

// using html file
//__dirname is current directory
//uses promises, like axios
fs.readFile(__dirname + '/index.html')
    .then(data => {
        //stores data
        index = data;
        //starts the server
        listen(port, hostname);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
        //to research exit codes
        process.exit(1);
    });

const getById = (req, res, url) => {
    const id = url.query.id;
    const object = toTo.find(object => object.id == id)
}

