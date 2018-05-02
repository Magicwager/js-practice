
// 定义一个动物类
function Animal(name) {
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function () {
        console.log(this.name + '正在睡觉！');
    }
    //实例引用属性
  this.features = [];
}
// 原型方法
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃：' + food);
};

/* //原型链继承
function Cat() {
}
Cat.prototype = new Animal();//父类实例作为子类的原型继承
Cat.prototype.name = 'cat';

//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.eat('fish'));
console.log(cat.sleep());
console.log(cat instanceof Animal); //true 
console.log(cat instanceof Cat); //true

var tom = new Cat('Tom');
var kissy = new Cat('Kissy');

console.log(tom.name); // "Animal"
console.log(kissy.name); // "Animal"
console.log(tom.features); // []
console.log(kissy.features); // []

tom.name = 'Tom-New Name';
tom.features.push('eat');

//针对父类实例值类型成员的更改，不影响
console.log(tom.name); // "Tom-New Name"
console.log(kissy.name); // "Animal"
//针对父类实例引用类型成员的更改，会通过影响其他子类实例
console.log(tom.features); // ['eat']
console.log(kissy.features); // ['eat']
 */


//构造继承
/* function Cat(name){
    Animal.call(this);//直接使用父类的构造函数来增强子类
    this.name = name || 'Tom';
  }
  
  // Test Code
  var cat = new Cat();
  //var cat =Cat()//这种调用方式不行
  console.log(cat.name);
  console.log(cat.sleep());
  console.log(cat instanceof Animal); // false
  console.log(cat instanceof Cat); // true */




  /* var tom = new Cat('Tom');
  var kissy = new Cat('Kissy');
  
  console.log(tom.name); // "Animal"
  console.log(kissy.name); // "Animal"
  console.log(tom.features); // []
  console.log(kissy.features); // []
  
  tom.name = 'Tom-New Name';
  tom.features.push('eat');
  
  //针对父类实例值类型成员的更改，不影响
  console.log(tom.name); // "Tom-New Name"
  console.log(kissy.name); // "Animal"
  //针对父类实例引用类型成员的更改，会通过影响其他子类实例
  console.log(tom.features); // ['eat']
  console.log(kissy.features); // []   解决了原型继承里头引用属性共享的问题 */


  /* //实例继承
  function Cat(name){
    var instance = new Animal();
    instance.name = name || 'Tom';
    return instance;
  }
  
  // Test Code
  //var cat = new Cat();
  var cat =Cat()//这种调用方式也可以
  console.log(cat.name);
  console.log(cat.sleep());
  console.log(cat instanceof Animal); // true
  console.log(cat instanceof Cat); // false

  var tom = new Cat('Tom');
  var kissy = new Cat('Kissy');
  
  console.log(tom.name); // "Animal"
  console.log(kissy.name); // "Animal"
  console.log(tom.features); // []
  console.log(kissy.features); // []
  
  tom.name = 'Tom-New Name';
  tom.features.push('eat');
  
  //针对父类实例值类型成员的更改，不影响
  console.log(tom.name); // "Tom-New Name"
  console.log(kissy.name); // "Animal"
  //针对父类实例引用类型成员的更改，会通过影响其他子类实例
  console.log(tom.features); // ['eat']
  console.log(kissy.features); // []  */

//组合继承
function Animal2(name) {
    // 属性
    this.name = name || 'Animal2';
    // 实例方法
    this.battle = function () {
        console.log(this.name + '正在打架！');
    }
    //实例引用属性
  this.features2 = [];
}
  function Cat(name){
    Animal.call(this);
    Animal2.call(this);
    this.name = name || 'Tom';
  }
  Cat.prototype = new Animal();
  Cat.prototype = new Animal2();
 
  
  Cat.prototype.constructor = Cat;
  
  // Test Code
  var cat = new Cat();
  console.log(cat.name);
  console.log(cat.sleep());
  console.log(cat.battle());
  console.log(cat instanceof Animal); // true
  console.log(cat instanceof Animal2); // true
  console.log(cat instanceof Cat); // true