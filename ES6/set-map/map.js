//Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，
let map = new Map();
let oKey = {
    "name":"magicwager"
}
map.set(oKey,"oValue");
console.log(map.get(oKey))//"oValue"