/**
 * this原理例子
 */

var w = 1;
var wFunction=function(){
    console.log(this.w)
}

var wObj = {
    w:2,
    wFunction:wFunction
}

wFunction()//1
wObj.wFunction()//2

var wObjFunc = wObj.wFunction;
wObjFunc();//1

//详细解释见https://github.com/mosoOcean/Web-FrontEnd-Interview/blob/master/docs/js%E4%B8%AD%E7%9A%84this%E5%8E%9F%E7%90%86.md

 /* let w = 1;
 let wFunction=function(){
     console.log(this.w)
 }

 let wObj = {
     w:2,
     wFunction:wFunction
 }

 wFunction()//
 wObj.wFunction()//

 let wObjFunc = wObj.wFunction;
 wObjFunc();// */