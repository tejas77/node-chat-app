var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var res = isRealString(98);
        expect(res).toBe(false);
        expect(res).toBeA('boolean');
    });

    it('should reject string with only spaces', () => {
        var res = isRealString('      ');
        expect(res).toBe(false);
        expect(res).toBeA('boolean');
    });
    
    it('should allow string with non-space characters', () => {
        var res = isRealString('  Tejas Rathod');
        expect(res).toBe(true);
        expect(res).toBeA('boolean');
    });
});