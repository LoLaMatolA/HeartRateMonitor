const http = require('http');
const fs = require('fs');
const express = require('express');

//var index =  fs.readFileSync( 'C:/Users/91907/Desktop/Major Project/Website/udb.html');

const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const port = new SerialPort({ path: 'COM4', baudRate: 9600 });
const parser = new ReadlineParser();

port.pipe(parser);
parser.on('data', console.log);



const app = express();
const server = http.createServer(app);

app.use(express.static('public'));

// Route to serve the HTML file
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/udb.html');
});

// Socket.IO setup
const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log('Node is listening to port');
});

parser.on('data', function(data) {
    console.log('Received data from port: ' + data);
    io.emit('data', data);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
    console.log('Server is running on port ' + PORT);
});


