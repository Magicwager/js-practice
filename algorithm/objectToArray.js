/**
 * 对象转换数组
 * //获取的DOM集合，以及函数的arguments也可以通过此方式转化为数组
 */

//注意对象必须是以下格式的才可以通过此方式转化为数组
var obj={
    0:"wager",
    1:'jian',
    2:'lx',
    3:24,
    length:4
    }
 /**
  * 利用数组的slice方法
  */
 let array = [].slice.call(obj)
 console.log(array)


 /**
  * ES6对象新增方法
  * Object.values()将可遍历成员的值组成数组返回
  */
  console.log(Object.values(obj))