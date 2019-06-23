//数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
let set = new Set([1,1,2,3]);
console.log(set)//set结构，Set(3) {}
console.log([...set]);//Array(3) [1, 2, 3]

/**
 * 可以用来去重
 */
//数组去重
//[...new Set(Array)]以及利用数组的方法，Array.from()将set转数组
console.log([...new Set([1,2,3,3,4,4,5,5])])
console.log(Array.from(new Set([1,2,3,3,4,4,5,5])))

//字符串去重
//[...new Set(string)].join("")
console.log([...new Set("aabbssbbbdd")].join(""))

/**
 * 四种方法
 */
let set1 = new Set();
set1.add(1).add("1").add(1).add("2").add(3);
console.log(set1.size);//4
console.log([...set1]);//[1, "1", "2", 3]
console.log(set1.has(3));//true
set1.delete(3);
console.log(set1.has(3))//false
set1.clear();
console.log(set1.size)//0

/**
 * 遍历操作
keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：使用回调函数遍历每个成员
遍历器对象可以用for...of遍历
 */
let set2 = new Set(["wj","wager","magic"]);
console.log(set2.keys())//SetIterator 遍历器对象
for(let item of set2.keys()){
    console.log(item)
}
for(let item of set2.values()){
    console.log(item)
}
//键值组成的数组，两成员相等
for(let item of set2.entries()){
    console.log(item)
}//["wj", "wj"]["wager", "wager"]["magic", "magic"]
//
set2.forEach((key,value,item)=>{
    console.log(`${key}:${value}:${item.size}`)
},this)//wj:wj:3 wager:wager:3 magic:magic:3

//数组的map与filter方法间接应用set结构：先转数组，运用数组的方法，然后再转回set结构
let set3 = new Set([1,2,3,4,5,6]);
 set31 = new Set([...set3].map(x=>x*2));
console.log(set31)
let set4 = new Set([1,2,3,4,5,6]);
let set41 = new Set([...set4].filter(x=>(x%2)==0));
console.log(set41)

//使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}