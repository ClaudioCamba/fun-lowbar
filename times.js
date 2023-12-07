function times(num, func){
    const arr = [];
    for(let i = 0; i<num; i++){
        arr.push(func(i));
    };
    return arr;
};

module.exports = times;