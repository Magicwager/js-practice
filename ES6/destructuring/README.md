### 解构解析用途

##### 交换变量值

```
let x = 1;
let y = 2;
[x,y] = [y,x]
//x=>2 y=>1
```

##### 从函数返回多个值

函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。

```

// 返回一个数组

function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
```
##### 函数参数的定义
通过结构解析可以方便的将一组参数与变量名对应起来

```
// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});

```
##### 提取Json数据
可以快速的提取Json数据

```
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]

```
##### 函数参数的默认值

```
let doSomething=function({a="wager",b="23",c}){
 
 ...

}

```
这样避免了在函数里头写类似`var a = config.a || 'default a'`;这样的语句。

##### 遍历map
任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。

```
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world

```
如果只想获取键名，或者只想获取键值，可以写成下面这样:

```
// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值
for (let [,value] of map) {
  // ...
}
```