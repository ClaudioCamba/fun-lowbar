function ourMap (arrObj, func) {
    const newArr = [];

    if (Array.isArray(arrObj)) {
        for (let i = 0; i < arrObj.length; i++) {
            if (typeof arrObj[i] === 'object') {
                newArr.push(arrObj[i][func]);
            } else {
                newArr.push(func(arrObj[i]));
            }
        }
    } else {
        for (const key in arrObj) {
            newArr.push(func(arrObj[key]));
        }
    }

    return newArr;
};

module.exports = ourMap;