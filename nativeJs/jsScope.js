
console.log("/* **************************** */")
var scope = "全局变量";
function consoleScope(){
    console.log(scope);//undefined，函数里头，变量声明提升，但是赋值不提前
    var scope = "局部变量";
    console.log(scope)//"局部变量"
}
/* 变量声明提升，但是赋值不提前相当于
function consoleScope(){
    var scope;
    console.log(scope);//undefined，函数内部定义了，只是没有值
    scope = "局部变量";
    console.log(scope)//"局部变量"
}

*/
function consoleOutScope(){
    console.log(scope)//函数内部没有找到定义，去外层找，结果找到了
}
consoleScope();
consoleOutScope();//"全局变量"

function consoleScopes(){
    var scope = "局部变量";
    consoleOutScope();//"全局变量"
}
consoleScopes();//consoleOutScope访问不到consoleScopes的局部变量，能访问到全局变量
console.log("/* **************************** */")





console.log("/* **************************** */")
/* 给未声明的变量赋值，此变量就会变成全局变量；var a=b=10; 可以解析成 b=10；var a=b; 也就是b为全局变量，a为局部变量，所以外部访问a访问不到，访问b结果为10； */
function aaa(){
    var a=b=10; 
}
aaa();
console.log(b);//结果为10；
//console.log(a);//结果为“a is not defined”无法访问到
console.log("/* **************************** */")




console.log("/* **************************** */")
/* 当参数跟局部变量重名的时候，参数高于局部变量 */
var a=10;
function aaaa(a){ 
    console.log(a);
    var a=20;  //因为 a 是形参，优先级高于 var a; 所以 局部变量a的声明其实被忽略了。
} 
aaaa(a); //结果为：10

var a=10;
function ccc(a){ 
    var a;
    console.log(a);
    var a=20;  //因为 a 是形参，优先级高于 var a; 所以 局部变量a的声明其实被忽略了。\
    console.log(a)
} 
ccc(a); //结果为：10  20
console.log("/* **************************** */")




console.log("/* **************************** */")
var a=10;
function ddd(a){ 
    console.log(a);
    a=20;  //因为 a 是形参，优先级高于 var a; 所以 局部变量a的声明其实被忽略了。\
    console.log(a)
} 
ddd(a); //结果为：10  20
console.log(a)//10
console.log("/* **************************** */")




console.log("/* **************************** */")
var a=10;
function ddd(b){ 
    console.log(a);
    a=20;  //因为 a 是形参，优先级高于 var a; 所以 局部变量a的声明其实被忽略了。\
    console.log(a)
} 
ddd(b); //结果为：10  20
console.log(a)//20
console.log("/* **************************** */")




console.log("/* **************************** */")
var a=[1,2,3];
var b=a;
b.push(4); 
console.log(b);//结果为[1,2,3,4] 
console.log(a);//结果为[1,2,3,4] 当b改变的时候a也发生了改变  


//当b重新被赋值的时候 a不会改变.示例：
var a=[1,2,3];
var b=a;
b=[1,2,3,4]
console.log(b);//结果为[1,2,3,4] 
console.log(a)//结果为[1,2,3]
console.log("/* **************************** */")


