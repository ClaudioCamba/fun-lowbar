const ourMap = require('../map.js');

describe('outMap', ()=>{
    test('Should return an array',()=>{
        expect(ourMap([])).toEqual([]);
    });
    test('Input array/object and function as argument should return results from invoked function in array',()=>{
        function square(n) {
            return n * n;
        }
        expect(ourMap([4, 8], square)).toEqual([16, 64]);
    });
    test('Input object and function as argument should return results from invoked function in array',()=>{
        function square(n) {
            return n * n;
        }
        expect(ourMap({ 'a': 4, 'b': 8 }, square)).toEqual([16, 64]);
    });
    test('Input array of object and with string as second parameter should return new array with object values containing string key',()=>{
        const users = [
            { 'user': 'barney' },
            { 'user': 'fred' }
          ];

        expect(ourMap(users, 'user')).toEqual(['barney', 'fred']);
    });
    test('It should return true if input variable has not been mutated',()=>{
        const val = { 'a': 4, 'b': 8 };
        function square(n) {
            return n * n;
        }
        ourMap(val, square);
        expect(val).toEqual({ 'a': 4, 'b': 8 });
    });
})
