//字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象
let [a,b,c,d,e,f]='hello';
console.log(a,b,c,d,e,f)

//还可以对字符串的属性进行结构解析
let {length:len}='hello';
console.log(len)

const name = "伍建",rank = "S";
let desc = "${name}今年绩效获得${rank}"
function replace(str){
   return  str.replace(/\$\{\([^}]+)\}/g,function(matched,key){
        console.log(matched,key)
        return eval(key)
    })
}
console.log(replace(desc))