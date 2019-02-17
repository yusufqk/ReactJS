module.exports = function(num){
    if (!isNaN(num)){
        return num.toString(10)+'px';
    }
    return num;
}