/* 函数参数 */
function add([x, y]){
    return x + y;
  }
console.log( add([1, 2]) ); // 3
//调用add 函数时表面是传入一个数组参数，但是传入参数的时候被结构解析了，内部函数只能感受到x与y

//在函数需要传递很多值时，可以用这种方式方便阅读
function whatever({name:name,sex:sex,old:old}){
    console.log(`I'm ${name} and I'm a ${sex} ,${old} years old`)
}
whatever({sex:'man',name:'magicwager',old:'28'})

//参数变量是默认声明的，所以不能再次let，const声明
function fun([x=1,y=2]){
    let x=1;//error
    const y=3;//error
}

//函数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
let x = 99;
function foo(p = x + 1) {
  console.log(p);
}
foo() // 100
x = 100;
foo() // 101

//函数默认值与结构解析结合使用
//whatever()//因为whatever方法只用到了结构解析，这里不穿参数的话，就会抛错：Cannot destructure property `name` of 'undefined' or 'null'.
//解决这个问题可以设置默认值
function whatever_new({name:name,sex:sex,old:old}={name:'magicwager',sex:'man',old:'28'}){
    console.log(`I'm ${name} and I'm a ${sex} ,${old} years old`)
}
whatever_new();
whatever_new({sex:'man',name:'magicwager',old:'30'})
//[[1,2],[3,4]].map(([a,b])=>console.log(a+b))