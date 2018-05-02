/* 排序算法 */

/* 冒泡排序 
从某一边挨个确定正确的位置，挨个询问是不是正确的顺序，直到全部问完，然后接着下一个基数挨个询问
*/
function bubbleSort(array){
    for(var i=0;i<array.length-1;i++){
        for(var j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                var temp=array[i];
                array[i]=array[j];
                array[j]=temp;
                
            }
         /*    console.log(array) */
        }
    }
    return array
}

/* 快速排序
参考某个元素值，将小于它的值，放到左数组中，大于它的值的元素就放到右数组中，然后递归进行上一次左右数组的操作，返回合并的数组就是已经排好顺序的数组了
*/
function quickSort(arr) {
        if(arr.length<=1) {
            return arr;
        }
        let leftArr = [];
        let rightArr = [];
        let q = arr[0];
        for(let i = 1,l=arr.length; i<l; i++) {
            if(arr[i]>q) {
                rightArr.push(arr[i]);
            }else{
                leftArr.push(arr[i]);
            }
        }
        return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
    }
var a=["3","4","2",'5','1']
console.log(bubbleSort(a))
var b=[3,4,2,5,1,34,23,45,232]
console.log(quickSort(b))