/* concat 合并数组，至少传递一个数组，返回合并后的数组
 */
var arr1=["2"];
var arr2=['1','hello'];
var arr3= new Array(4);//[ <4 empty items> ]
//console.log(arr3)
arr3=arr1.concat(arr2);
var arr4 = arr2.toString()
console.log(arr4,arr2.join())

/* join 将数组元素按指定符号拼成字符串，默认的符号是英文逗号*/
var str1=arr3.join();
//console.log(str1);
var str2=arr3.join("-");
//console.log(str2)

/* sort 数组排序,默认是按英文字母的ASC码升序排列，比如apple排在orange前面，其实sort还可以接收一个参数，
该参数function类型，就是说如果不想按默认的比较规则来排序，就必须提供一比较函数，该函数有两个参数a、b,
如果返回值小于0，则a排在b前面,如果返回值大于0，则b排在a前面,如果返回值等于0，则a、b位置不变 */
//arr3.sort();
//console.log(arr3)
arr3.sort(function(){return 0})
//console.log(arr3);//位置不换

sort =function(a,b){
  return a-b
}
arr3.sort(sort);
//console.log(arr3)

/* pop 删除数组的最后一个元素，把数组长度减 1，并且返回它删除的元素的值 如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值*/
/* shift(): 删除数组的第一个元素，并返回它删除的那个元素,如果数组已经为空，则 shift() 不改变数组，并返回 undefined  */
var removeObject=arr3.pop();
console.log(removeObject+",arr3:"+arr3)

/* push(n1,n2,n3,....nx)向数组末尾添加一个或多个元素，并返回添加后数组的长度*/
/* unshift(n1,n2,n3,....nx)向数组头添加一个或多个元素，并返回添加后数组的长度， */


