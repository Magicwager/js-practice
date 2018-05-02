/* 计算一个数组最大值与最小值的差值
其实就是找最大值与最小值
*/
function maxdiff(array){
    var maxVal=array[0];
    var minVal=array[0];
    for (var i=1;i<array.length;i++){
        /* 可以用到math的方法 */
        /* if(array[i]>maxVal){
            maxVal=array[i];
        } */
        maxVal=Math.max(maxVal,array[i])
        /* if(array[i]<minVal){
            minVal=array[i];
        } */
        minVal=Math.min(minVal,array[i])
    }
    return maxVal-minVal
}
var a=[3,4,7,34,2,2,4,6];
var b=[1,1,2,1,1,1]
console.log(maxdiff(a))