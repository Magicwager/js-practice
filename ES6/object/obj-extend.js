/* 简写,属性与方法都可以简写 */
let birth = '1998/01/01';

const Person = {

    name: 'magicwager',

    //等同于birth: birth
    birth,

    // 等同于hello: function ()...
    hello() { console.log('我的名字是', this.name); }

};
/* 经常用于函数返回对象 */


/* ES6 允许字面量定义对象时，用（表达式）作为对象的属性名或方法名，即把表达式放在方括号内。 */
//es5 字面量定义对象时，只能利用标志符方式定义属性
var obj = {
    foo: true,
    abc: 123
};
//es6
let propKey = 'foo';

let obj2 = {
    [propKey]: true,
    ['a' + 'bc']: 123,
    ['h' + 'ello']() {
        return 'hi';
    }
};

/**
 * 注意：上面两种不能同时使用。
 * 对象字面量定义中使用表达式作为属性名或方法名,不能使用简写
 */
//错误，这里想
/*  let foo = 'sn';
 let sn = "abc";
 let obj3 = {
     [foo]
 } */
//正确
let foo = 'sn';
let sn = "abc";
let obj3 = {
    [foo]: "cb",//使用了表达式作为属性名，但没有使用简写
    sn//使用了简写，但没有使用表达式作为属性名
}

/**
 * super关键字，指向当前对象的原型对象
 */

const protoType = {
    foo: "你好"
}
const obj4 = {
    foo: "world",
    find() {
        return super.foo
    }
}
//设置原型对象
Object.setPrototypeOf(obj4, protoType)
console.log(obj4.find())//你好


/**
 * 对象解构赋值
 * 解构赋值的拷贝是浅拷贝，即如果一个键的值是复合类型的值（数组、对象、函数）、那么解构赋值拷贝的是这个值的引用，而不是这个值的副本
 */
let obj5 = { a: { b: 1 } };
let { ...x } = obj5;
obj5.a.b = 2;
x.a.b // 2

/**
 * 扩展运算符的解构赋值，不能复制继承自原型对象的属性
 */
let o1 = { a: 1 };
let o2 = { b: 2 };
o2.__proto__ = o1;
let { ...o3 } = o2;
o3 // { b: 2 }
o3.a // undefined

/**
 * 对象解构赋值最常用处场景
 */
function baseFunction({ a, b }) {
    // ...
}
function wrapperFunction({ x, y, ...restConfig }) {
    // 使用 x 和 y 参数进行操作
    // 其余参数传给原始函数
    return baseFunction(restConfig);
}

