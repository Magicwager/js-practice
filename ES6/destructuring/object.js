/* 对象解构赋值 */
//是按照属性名去匹配赋值，与数组不一样，不按顺序
let {bar,foo} = {foo:"hello",bar:"world"}
console.log(bar,foo)//"world" "hello"
//这种不大常用，变量名与属性明不一致时，用到的是模式匹配
let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
console.log(f,l)//'hello' 'world'
//嵌套解构
let obj2 = {
    p: [
      'Hello',
      { y: 'World' }
    ]
  };
  
  let { p: [x, { y }] } = obj2;
 console.log(x,y)//这里p就是模式
 let {p,p:p2} = obj2;
 console.log(p,p2)//[ 'Hello', { y: 'World' } ]  [ 'Hello', { y: 'World' } ]



 //两种方式都可以设置默认值，且属性值严格等于undefined时，默认值才生效
let [k=1,g=3,h=5,i] = [,4,undefined,null]
console.log(k,g,h,i)//1 4 5 null

let {m="hello",n="你好",o} = {m:undefined,n:null,o:"good"}
console.log(m,n,o)//"hello" null "good"

//对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量
let {log,cos,sin}=Math;
console.log(log,cos,sin)

/* 函数参数 */
function add([x, y]){
    return x + y;
  }
console.log( add([1, 2]) ); // 3

[[1,2],[3,4]].map(([a,b])=>console.log(a+b))