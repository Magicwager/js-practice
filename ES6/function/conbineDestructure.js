function foo({x,y=1}){
 console.log(x+y)
}
foo({});
foo({x:1})
foo({x:2,y:3})
//foo()//报错


function foo({x,y=1}={}){
    console.log(x+y)
   }
   foo({});
   foo({x:1})
   foo({x:2,y:3})
   foo()//不会报错，与foo({})一致


function move({x = 0, y = 0} = {}) {
    return [x, y];
  }
  
  move({x: 3, y: 8}); // [3, 8]
  move({x: 3}); // [3, 0]
  move({}); // [0, 0]
  move(); // [0, 0]
  

  function move({x, y} = { x: 0, y: 0 }) {
    return [x, y];
  }
  
  move({x: 3, y: 8}); // [3, 8]
  move({x: 3}); // [3, undefined]
  move({}); // [undefined, undefined]
  move(); // [0, 0]