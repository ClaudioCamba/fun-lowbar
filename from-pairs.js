function fromPairs(arr){

   const obj = {};
   for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
   }
   
    return obj;
}

module.exports = { fromPairs };