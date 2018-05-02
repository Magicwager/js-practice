function Foo(){
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
console.log(ss)