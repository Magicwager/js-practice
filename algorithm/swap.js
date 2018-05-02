/* 交换两个整数，并且不允许使用中间变量 
原理：相当于先算出两个值的差，然后，一个减去差值，另一个加上差值。运用到a=a+(b-a),b=a+(b-a)
*/
function swap(a,b){
    b=a-b;
    a=a-b;
    b=b+a;
    return [a,b]
}
console.log(swap(3,2))

/* 可以用ES6的语法糖更简洁 */
let a=1;
let b=2;
[a,b]=[b,a];
console.log("a:"+a+",b:"+b)