const {ourForEach} = require('../for-each.js');

beforeEach(() => {
    jest.restoreAllMocks();
});

describe('outForEach', ()=>{
    const users = [
        {'Liam': true},
        {'Daisy': false}
    ]

    test('It should return the same input argument', ()=>{
        expect(ourForEach(users)).toBe(users);
    });
    test('It should spy on console.log and count number of times its called', ()=>{
        const consoleLogSpy = jest.spyOn(console, 'log');
        ourForEach(users, function(value) {console.log(value)})

        expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    });
    test('Should iterate over object and call function per item', ()=>{
        const consoleLogSpy = jest.spyOn(console, 'log');
        ourForEach({ 'a': 1, 'b': 2 }, function(value, key) {console.log(key)})

        expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    });
    test('Input more values should return same object object', ()=>{
        const consoleLogSpy = jest.spyOn(console, 'log');
        const random = ['1',2,true,false,'Hello'];
        expect(ourForEach(random,(value)=>{console.log(value)})).toEqual(['1',2,true,false,'Hello']);
        expect(consoleLogSpy).toHaveBeenCalledTimes(random.length);
    });
});
