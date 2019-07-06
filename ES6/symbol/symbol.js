/**
 * symbol含义:独一无二的值
 */
let a = Symbol("wu");
let b = Symbol("wu");

console.log(a == b);//false
console.log(a)//Symbol(wu)
console.log(a.toString())//Symbol(wu)
console.log(a == a.toString())//false

/**
 * Symbol不能参与运算
 */
//console.log(`the Symbol is ${a}`)//TypeError: Cannot convert a Symbol value to a string

/**
 * 转换后参与运算
 */
console.log(`the Symbol is ${a.toString()}`)//the Symbol is Symbol(wu)

/**
 * Symbol 也可以转布尔值，不能转数字
 */

//let c = Number(a);//TypeError: Cannot convert a Symbol value to a number
let d = Boolean(Symbol());
console.log(d)//true

/**
 * Symbol.prototype.description
 * ES2019提供了一个实例属性description直接返回Symbol的描述
 */
console.log(Symbol("wu").description)//wu



/**
 * 由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
 */
/**
 * 有三种写法
 */

//第一种，这里注意属性名必须是加[],否则就会undefined
let nameSymbol = Symbol("name")
let obj = {
    [nameSymbol]: "wu"
}
console.log(obj[nameSymbol])//wu

let obj2 = {
    nameSymbol: "wu"
}
console.log(obj2[nameSymbol])//undefined

//第二种，
let obj3 = {};
obj3[nameSymbol] = "wu";
console.log(obj3[nameSymbol])//wu

//第三种
let obj4 = {}
Object.defineProperty(obj4,nameSymbol,{value:"wu"})
console.log(obj4[nameSymbol])//wu

/**
 * Symbol 值作为对象属性名时，不能用点运算符。因为.运算后面总是字符串
 */
console.log(obj4.nameSymbol)//undefined