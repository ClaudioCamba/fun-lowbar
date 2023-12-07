function ourForEach(arrObj, func) {
    const checkArrObj = Array.isArray(arrObj);

    if (func){
        if (checkArrObj){
            for (let i = 0; i < arrObj.length; i++) {
                func(arrObj[i]);
            }            
        } else {
            for (const key in arrObj) {
                func(arrObj[key],key);
            }
        }
    }

    return arrObj;
}

module.exports = {ourForEach};