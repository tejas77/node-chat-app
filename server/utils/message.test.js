var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Tejas';
        var text = 'I am Test';
        var res = generateMessage(from, text);
        expect(res).toInclude({ from, text });
        expect(res.createAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Admin';
        var lat = 1;
        var long = 2;
        var message = generateLocationMessage(from, lat, long);
        expect(message).toInclude({
            from,
            url: `https://www.google.com/maps?q=1,2`
        });
        expect(message.createAt).toBeA('number');
    });
})