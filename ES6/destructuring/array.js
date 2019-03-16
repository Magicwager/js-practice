/* 数组解构赋值 */

//模式匹配赋值
//let [a,[b],[c]] = [1,[2,2],3]//错误，左右模式不匹配：c不匹配
let [a,[b],[c]] = [1,[2,2],[3]]
console.log(a,b,c)//1 2 3
let [d,...e] = [1,2,3,4]
console.log(d,e)//1 [2,3,4]


//默认值解构赋值
let [f=2]=[];
let [g,h='world']=['hello'];
console.log(f,g,h);//2 'hello' 'world'
//默认值之中，只有严格赋值为undefined才能默认值生效
let [x = 1] = [undefined];// 1
let [z = 1] = [null];// null

//如果默认值是表达式，那么这个表达式是惰性求值的，即只有在用到时才会执行表达式
function fun(){
    console.log("this is fun")
}
let[y=fun()]=[1]//不执行fun

