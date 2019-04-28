const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected');
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User joined'));
    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback();
    });
    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
    });
    socket.on('disconnect', () => {
        console.log('Disconnected from User');
       });
});


server.listen(port, () => {
    console.log('Started on port ', port);
    
});
module.exports = {app};