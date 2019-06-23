
getType = data =>{
    const map = {
        "[object String]":"string",
        "[object Null]":"null",
        "[object Undefined]":"undefined",
        "[object Number]":"number",
        "[object Boolean]":"boolean",
        "[object Object]":"object",
        "[object Array]":"array",
        "[object Function]":"function",
        "[object Date]":"date",
        "[object RegExp]":"regExp"
    }
    return map[Object.prototype.toString.call(data)]
}
deepClone = data =>{
    let type = getType(data);
    let cloneObj;
    if(type =="object"){
        cloneObj ={};
        for(let prop in data){
            cloneObj[prop]=deepClone(data[prop])
        }
    }else if(type=="array"){
        cloneObj =[];
        data.forEach((ele) =>{
            cloneObj.push(deepClone(ele))
        });
    }else{
        return data
    }
    return cloneObj

}
const obj = {
    "name":"wujian",
    "action":["speack","sleep","sing"],
    "place":{
        "Hunan":["长沙","娄底","冷水江"],
        "Beijing":["昌平","海淀"]
    }
}
const str = "str";
const array = ["javascript","java"]
const fun = ()=>console.log("This is a function")
//const {test1,test2,test3}=[deepClone(str),deepClone(array),deepClone(fun)];
//console.log(test1,test2,test3)
console.log(deepClone(obj))
console.log(deepClone(str))
console.log(deepClone(array))
console.log(deepClone(fun))
let copyObj = deepClone(obj);
copyObj.name="magicwager";
console.log(obj);
let copyObj2 = obj;
copyObj2.name = "anyone";
console.log(obj)


/**
 * 用JSON.stringify把对象转成字符串，再用JSON.parse把字符串转成新的对象
 */
var obj1 = { body: { a: 10 } };
var obj2 = JSON.parse(JSON.stringify(obj1));
obj2.body.a = 20;
console.log(obj1);
// { body: { a: 10 } } <-- 沒被改到
console.log(obj2);
// { body: { a: 20 } }
console.log(obj1 === obj2);
// false
console.log(obj1.body === obj2.body);
/**
 * 但是这种方法也有不少坏处，譬如它会抛弃对象的constructor。也就是深拷贝之后，不管这个对象原来的构造函数是什么，在深拷贝之后都会变成Object。

这种方法能正确处理的对象只有 Number, String, Boolean, Array, 扁平对象，即那些能够被 json 直接表示的数据结构。RegExp对象是无法通过这种方式深拷贝。

也就是说，只有可以转成JSON格式的对象才可以这样用，像function没办法转成JSON。
 */