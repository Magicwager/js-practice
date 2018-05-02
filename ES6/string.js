/* ES6为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历。
这样关于字符串的算法当中就不用将字符串先分割成数组再合成字符串了
*/
let foo='absolutely';
for(let a of foo){
    console.log(a)
}

/* ES6应用模版字符串解决字符串拼接变量或者字符串换行问题 .所有模板字符串的空格和换行，都是被保留的
实质：模板字符串的大括号内部，就是执行 JavaScript 代码
*/
//es5
console.log("输出的字符串是"+foo);
var str1 = "This is"
          +" es5"
          +" coding"
console.log(str1)
//es6
console.log(`输出的字符串是${foo}`)
const str2 = `This is
              es5
              coding`

console.log(str2)