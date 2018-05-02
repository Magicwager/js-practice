var num = 123;
var str = 'abcdef';
var bool = true;
var arr = [1, 2, 3, 4];
var json = {name:'wenzi', age:25};
var func = function(){ console.log('this is function'); }
var und = undefined;
var nul = null;
var date = new Date();
var reg = /^[a-zA-Z]{5,20}$/;
var error= new Error();

console.log( typeof (num),typeof(str),typeof(bool),typeof(arr),typeof(json),typeof(func),typeof(und),typeof(nul),typeof(date),typeof(reg),typeof(error));
//输出 number string boolean object object function undefined object object object object


//ESMA5 规定内置对象的[[Class]]属性用来判断一个对象属于哪种类型的值的，规范里头只有通过Object.prototype.toString来访问[[Class]]的值
console.log(
    Object.prototype.toString.call(num),
    Object.prototype.toString.call(str),
    Object.prototype.toString.call(bool),
    Object.prototype.toString.call(arr),
    Object.prototype.toString.call(json),
    Object.prototype.toString.call(func),
    Object.prototype.toString.call(und),
    Object.prototype.toString.call(nul),
    Object.prototype.toString.call(date),
    Object.prototype.toString.call(reg),
    Object.prototype.toString.call(error)
)
//[object Number] [object String] [object Boolean] [object Array] [object Object] [object Function] [object Undefined] [object Null] [object Date] [object RegExp] [object Error]
function type(obj){
    switch(Object.prototype.toString.call(obj)){
        case '[object Number]':
        return "Number";
        break;
        case'[object String]':
        return "String";
        break;
    }
}
console.log(Object.prototype.toString.call(str).slice(8,-1))
