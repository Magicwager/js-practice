/**
 * 普通的for循环
 * for(let i=0;i<arr.length;i++){} 
 * 这是最普通的遍历方法，也是性能最高的，但是还可以优化下
 */
let arr = [1,2,3,4,5,6,7];
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

/**
 * 优化版for循环
 * for(let i=0,len=arr.length;i<len;i++){}
 * 使用临时变量，将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果才会比较明显
 */
/* for(let i=0,len= arr.length;i<len;i++){
    console.log(arr[i])
} */

/**
 * forEach循环
 * 
 */
arr.forEach((i)=>{
    console.log(i)//元素
})

/**
 * map循环
 */
arr.map((obj,idx)=>{
    console.log(obj);
    console.log(idx)
})

/**
 * for in循环
 */
for(idx in arr){
    console.log(idx);//下标
}