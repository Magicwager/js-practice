/**
 * 实现一个add方法，使计算结果能够满足如下预期：
 * add(1)(2)(3) ()
 * add(1, 2, 3)(4)()
 */

function curryAdd() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    let _args = [].slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    let adder = function () {

        let _adder = function() {
            // [].push.apply(_args, [].slice.call(arguments));
            _args.push(...arguments);
            return _adder;
        };

        // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.toString = function () {
            return _args.reduce(function(x,y){
                return x+y
            });
        }

        return _adder;
    }
    // return adder.apply(null, _args);
    return adder(..._args);
}

console.log(curryAdd(1)(2)(3))
console.log(curryAdd(1, 2, 3)(4)()) 
console.log(curryAdd(1)(2))

/**
 * 函数隐式转换，如果一个函数参与计算，则默认会调用函数的toString方法转为字符串进行计算，而如果重新定义toString方法，或定义valueOf的方法，
 */
/*  let fn = function(){
     let arg = [...arguments];
     let a = function(){
         arg.push([...arguments])
        return a
     }
     a.valueOf = function(){
         return arg.reduce(function(x,y){
            return x+y;
         })
     }
     return a;
 }
 console.log(fn(1)(2)(3)) */



