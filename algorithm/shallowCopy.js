/* JavaScript数据类型分为两类：原始类型（primitive type）和对象类型（object type） */

shallowCopy=obj=>{
    const copyObj = {};
    if (Object.prototype.toString.call(obj)=='[object Object]'){
        console.log(1)
        for(prop in obj){
            console.log(prop)
            if(obj.hasOwnProperty(prop)){
                copyObj[prop] = obj[prop]
            }
        }
        return copyObj;
    }else{
        return obj;
    }
}
const objTest1 = null;
const objTest2 = {name:"wujiank",action:"speak",words:["hello","world"]}
const objTest3 = function(){console.log("你好")};
const objTest4 = ["1","3"]
const copy1 = shallowCopy(objTest1);
const copy2 = shallowCopy(objTest2);
const copy3 = shallowCopy(objTest3);
const copy4 = shallowCopy(objTest4);
console.log(copy1,copy2,copy3,copy4)
copy3()
