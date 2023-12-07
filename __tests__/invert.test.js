const ourInvert = require('../invert.js');

describe('ourInvert()', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 }
    test('returns new object', () => {
        expect(ourInvert(object)).not.toBe(object);
    });
    test('returns new object', () => {
        expect(typeof ourInvert(object)).toBe('object');
    });
    test('returns reversed object, overwriting any duplicate keys', () => {
        expect(ourInvert(object)).toEqual({'1':'c', '2': 'b'});
    });
});