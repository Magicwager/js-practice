
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