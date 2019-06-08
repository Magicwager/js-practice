//函数默认参数，替换let height = height || 50;这种写法
function foo({x,y=1}){
 console.log(x+y)
}
foo({});//NaN
foo({x:1})//2
foo({x:2,y:3})//5
foo()//报错



function foo({x,y=1}={}){
    console.log(x+y)
   }
   foo({});
   foo({x:1})
   foo({x:2,y:3})
   foo()//不会报错，与foo({})一致

//函数参数的默认值是空对象，但是设置了对象解构赋值的默认值
function move({x = 0, y = 0} = {}) {
    return [x, y];
  }
  
  move({x: 3, y: 8}); // [3, 8]
  move({x: 3}); // [3, 0]
  move({}); // [0, 0]
  move(); // [0, 0]

  //函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
  function move({x, y} = { x: 0, y: 0 }) {
    return [x, y];
  }
  
  move({x: 3, y: 8}); // [3, 8]
  move({x: 3}); // [3, undefined]
  move({}); // [undefined, undefined]
  move(); // [0, 0]


//函数的默认参数应该是尾参数，如果是非尾参数，那么这个参数是不能缺省的
function foo2({x,y=1,z}={}){
 console.log(x,y,z)
}
