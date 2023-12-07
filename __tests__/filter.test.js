const ourFilter = require('../filter.js');


const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
const mockFunc = (o) => {
    return !o.active;
};

test('returns an array', () => {
    expect(Array.isArray(ourFilter(users, mockFunc))).toEqual(true);
});
test('when passed a function and an array of objects, returns only those that return true', () => {
    expect(ourFilter(users, function(o) { return !o.active; })).toEqual([{ 'user': 'fred',   'age': 40, 'active': false }]);
});
test('when passed array of objects and object, returns array of objects with matching key value pairs', () => {
    expect(ourFilter(users, { 'age': 36, 'active': true })).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
});
test('when passed array of a key and its value, returns array of objects with matching key value pairs', () => {
    expect(ourFilter(users, ['active', false])).toEqual([{ 'user': 'fred',   'age': 40, 'active': false }]);
})
test('when passed a string, returns array of objects with truthy key value', () => {
    expect(ourFilter(users, 'active')).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
});



