var socket = io();

socket.on('connect', function () {
    console.log('Connected to Server');

    socket.emit('createMessage', {
        to: 'jen@ex.com',
        text: 'Hi. Jen'
    });
});

socket.on('disconnect', function () {
 console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('Got new Message', message);
})