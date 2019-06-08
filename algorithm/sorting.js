/* 排序算法 */
/**
 * 时间复杂度记忆
冒泡、选择、直接 排序需要两个for循环，每次只关注一个元素，平均时间复杂度为O(n²)(一遍找元素O(n)，一遍找位置O(n)）
快速、归并、希尔、堆基于二分思想，log以2为底，平均时间复杂度为O(nlogn)(一遍找元素O(n)，一遍找位置O(logn))
稳定性记忆-“快希选堆”（快牺牲稳定性）
排序算法的稳定性：排序前后相同元素的相对位置不变，则称排序算法是稳定的；否则排序算法是不稳定的
 */
var a = ["3", "4", "2", '5', '1']

var b = [3, 4, 2, 5, 1, 34, 23, 45, 232]
/* 冒泡排序 
从某一边挨个确定正确的位置，挨个询问是不是正确的顺序，直到全部问完，然后接着下一个基数挨个询问
*/
function bubbleSort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;

            }
            /*    console.log(array) */
        }
    }
    return array
}
console.log(`********冒泡排序********${bubbleSort(a)}`)
/**
 * 快速排序
 * 参考某个元素值，将小于它的值，放到左数组中，大于它的值的元素就放到右数组中，然后递归进行上一次左右数组的操作，返回合并的数组就是已经排好顺序的数组了
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let leftArr = [];
    let rightArr = [];
    let q = arr[0];
    for (let i = 1, l = arr.length; i < l; i++) {
        if (arr[i] > q) {
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i]);
        }
    }
    return [].concat(quickSort(leftArr), [q], quickSort(rightArr));
}
console.log(`********快速排序********${quickSort(b)}`)

/**
 * 合并排序方法
 * 合并排序是速度仅次于快速排序，为稳定排序算法，一般用于总体无序，但是各子项相对有序的数列，属于分治思想，递归归并。
 */
function mergeSort(arr) {
    let l = arr.length;
    if (l <= 1) {
        return arr
    }
    let mid = Math.floor(l / 2),
        leftArr = arr.slice(0, mid),
        rightArr = arr.slice(mid, l);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
    let newArray = [];
    while (leftArr.length > 0 && rightArr.length > 0) {
        if (leftArr[0] > rightArr[0]) {
            newArray.push(rightArr.shift())
        } else {
            newArray.push(leftArr.shift())
        }
    }
    while (leftArr.length > 0) {
        newArray.push(leftArr.shift())
    }
    while (rightArr.length > 0) {
        newArray.push(rightArr.shift())
    }
    return newArray
}
console.log(`********合并排序********${mergeSort(b)}`)

/**
 * 插入排序法
 */
function insertSort(arr) {
    if(arr.length<=1){
        return arr;
    }
    for (let i = 1; i < arr.length; i++){
        let temp = arr[i+1];
        let j=i;
        while(j>0 && temp<arr[i]){
           arr[i+1] = arr[i];
           j--
        }
        arr[j] = temp;
    }
    return arr
}
console.log(`********插入排序********${mergeSort(b)}`)

/**
 * js 数组sort方法
 * sort(sortby)默认按字母表排序
 */

 console.log(`********数组方法sort********${b.sort()}`)//1,2,23,232,3,34,4,45,5
 console.log(b.sort((a,b)=>{
     return a - b
 }))