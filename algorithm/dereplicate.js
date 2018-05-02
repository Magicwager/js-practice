/* 比如输入: [1,13,24,11,11,14,1,2] 
输出: [1,13,24,11,14,2]
需要去掉重复的11 和 1 这两个元素。 */
/* 利用object的key */
function dereplicate(array) {
    var obj = {};
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (!obj[array[i]]) {
            obj[array[i]] = true;
            newArray.push(array[i])
        }
    }
    return newArray
}
var a=[1,13,24,11,11,14,1,2];
console.log(dereplicate(a))