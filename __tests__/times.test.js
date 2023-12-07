const times = require ('../times.js');

test('returns an array', () => {
    const num = 5;
    const mockFunc = jest.fn();
    expect(Array.isArray(times(num, mockFunc))).toEqual(true);
});
test('returns an array of length num', () => {
    const num = 5;
    const mockFunc = jest.fn();
    expect(times(num, mockFunc).length).toEqual(num);
});
test('returns an array of outputs from function', () => {
    const number = 2;
    const mockFunc = () => 'hi';
    expect(times(number, mockFunc)).toEqual(['hi','hi']);
});
test('calls the function num times', () => {
    const number = 2;
    const mockFunc = jest.fn();
    times(number, mockFunc);
    expect(mockFunc).toHaveBeenCalledTimes(2);
});
test('calls the function num times', () => {
    const number = 2;
    expect(times(number, String)).toEqual(['0','1']);
});



