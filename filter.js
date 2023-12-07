function ourFilter(arrObj, func){
    const truthies = [];
    const newArr = [...arrObj];
    for(let i=0; i<arrObj.length; i++){
        if(typeof func === 'function'){
            if(func(arrObj[i])){
                truthies.push(arrObj[i]);
            };
        } else if(typeof func === 'object'){
            if(Array.isArray(func)){
                if(arrObj[i][func[0]] === func[1]){
                    truthies.push(arrObj[i]);
                };
            } else{
                let counter = 0
                for(const key in func){
                    if(func[key] !== newArr[i][key]){
                        counter++
                    };
                };
                if(counter === 0){
                    truthies.push(arrObj[i]);
                };
        };
        } else if (typeof func === 'string'){
            if(arrObj[i][func]){
                truthies.push(arrObj[i]);
            };
        };
    };
    return truthies;
};

module.exports = ourFilter;

/*


        */