var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Tejas';
        var text = 'I am Test';
        var res = generateMessage(from, text);
        expect(res).toInclude({ from, text });
        expect(res.createAt).toBeA('number');
    });
});