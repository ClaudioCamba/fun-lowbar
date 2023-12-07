const { fromPairs } = require('../from-pairs');

// _.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }

describe('fromPairs', ()=>{
    test.skip('Input array should return first value as key and second as value',()=>{
        const arr = ['a',1];
        expect(fromPairs(arr)).toEqual({'a':1})
    });
    test('Input nested array should return first value as key and second as value un-nested',()=>{
        const arr = [['a',1]];
        expect(fromPairs(arr)).toEqual({'a':1})
    });
    test('Expect return typeof to be object',()=>{
        const arr = [['a',1]];
        expect(typeof fromPairs(arr)).toEqual('object');
    });
    test('Should return nested string as value',()=>{
        const arr = [['a',[1,2,3,4]]];
        expect(fromPairs(arr)).toEqual({'a':[1,2,3,4]});
    });
    test('Input multiple array values and returns object first value as key and second as value',()=>{
        const arr = [['a', 1], ['b', 2],['c', 3], ['d', 4]];
        expect(fromPairs(arr)).toEqual({ 'a': 1, 'b': 2, 'c': 3, 'd': 4 });
    });
});