exports.min = function min(array) {
return !array || !(array.length) ? 0 :
        array.reduce((accum, value) =>
            Math.min(accum, value)
        );
};

exports.max = function max(array) {
    return !array || !(array.length) ? 0 :
        array.reduce((accum, value) =>
            Math.max(accum, value)
        );
};

exports.avg = function avg(array) {
    if(!array || !(array.length)){
    	return 0;
    }
    const sum = array.reduce((accum, value) => accum +=value,0); 
    const end = sum / array.length;
    return end;
    

};
