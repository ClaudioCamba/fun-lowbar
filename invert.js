function ourInvert(obj){
    const reverseObj = {};
    for(const key in obj){
        reverseObj[obj[key]] = key;
    };
    return reverseObj;
};



module.exports = ourInvert;
