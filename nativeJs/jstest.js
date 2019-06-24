/* function Foo(){
    getName = function(){console.log("1")};
    return this;
}
Foo()
getName()//首先执行Foo，getName指向的地址为Foo里头的那个函数
var getName;
console.log(getName())//
function getName(){
    console.log("5")
}
console.log(getName())
Foo.getName=function(){
    console.log("2")
}
Foo.prototype.getName=function(){
    console.log("3")
}
Foo()
getName=function(){
    console.log("4")
}
Foo.getName()
Foo.prototype.getName()

getName()

var ss="s";
function ss(){
    console.log("ss")
}
console.log(ss) */


/**
 * 实现一个add方法，使计算结果能够满足如下预期：
 * add(1)(2)(3) ()
 * add(1, 2, 3)(4)()
 */

 function add(param1){
    return function(param2){
        return function (param3){
            return function (){
                return param1+param2+param3;
            }
        }
    }
 }

 function createCurry(func, args) {
    
        var arity = func.length;
        var args = args || [];
    
        return function() {
            var _args = [].slice.call(arguments);
            [].push.apply(_args, args);
    
            // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
            if (_args.length < arity) {
                return createCurry.call(this, func, _args);
            }
    
            // 参数收集完毕，则执行func
            return func.apply(this, _args);
        }
}


