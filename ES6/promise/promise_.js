//Promise 表示一个异步的最终结果，要求如下：
/* 
1. Promise 必须处在三个状态的其中之一
    如果是pending，可转向fulfilled 或rejected
    如果是fulfilled,必须返回一个值（不能被改变），且不能转向其他状态,
    如果是rejected,必须返回一个原因（不能被改变），且不能转向其他状态
2. 必须提供一个then方法来获取值或原因


*/

//构造函数的参数是一个异步任务（当然同步也可以，只是一般为异步任务）,目的是执行这个异步任务
function Promise(task){
    //将this缓存起来，that为Promise实例
    let that = this;
    //（必须处在三种状态之一）默认pending状态，总共有三种状态：pending,fulfilled,rejected
    that.status = "pending";
    //Promise必须返回的值或原因
    that.value = undefined;
    that.reason = undefined;
    //将Promise状态变成成功态，执行成功的处理函数
    function resolve(value){
        //只能是pendding 状态下变成功态（fulfilled）,所以要加一个当前状态的判断
        if(that.status == "pending"){
            //（规定必须处在三种状态之一，所以需要改变下Promise 的状态）
            that.status = "fulfilled";
            // 如果是fulfilled,必须返回一个值（不能被改变），也就是赋值给这个Promise实例
            that.value = value;
            //实现承诺的时候，执行成功后需要执行的事情，及回调fulfilledCallBack里头的任务,这里传入参数去执行then存起来的需要处理的事情
            that.fulfilledCallBackList.forEach(item=>item(value))
        }
    }
    //将Promise状态变成失败态，执行失败的处理函数
    function rejected(reason){
        //只能是pendding 状态下变失败态（rejected）,所以要加一个当前状态的判断
        if(that.status == "pending"){
            //（规定必须处在三种状态之一，所以需要改变下Promise 的状态）
            that.status = "rejected";
            //如果是rejected,必须返回一个原因（不能被改变），也就是给这个Promise实例一个原因
            that.reason = reason;
            //实现承诺的时候，执行失败后需要执行的事情，即回调rejectedCallBack里头的任务
            that.rejectedCallBackList.forEach(item=>item(reason))
        }
    }
    //成功后或失败后，所有需要处理的事情（都可以为多个，所以为一个数组）,初始为空。
    that.fulfilledCallBackList = [];
    that.rejectedCallBackList = [];
    //因为目的是要执行传进来的任务的，所以执行任务，执行任务有失败有成功，所以得传两种情况出现后的处理。即resolve,rejected
    //但是任务逻辑可能throw一个异常，所以加一个try catch
    try{
        task(resolve,rejected);
    }catch(e){
        rejected(e)
    }
}
//onFulfilledCallBack,onRejectedCallBack分别为成功失败的回调
//then函数是将需要处理的先存起来，可以存多个。待Promise状态更改为完成或失败态后再来执行
Promise.prototype.then = function(onFulfilledCallBack,onRejectedCallBack){
    //将this缓存起来，that为Promise实例
    let that = this;
    //这里支持同步跟异步，如果需要异步执行的，那就是在pendding状态，先把需要处理的先存起来
    //如果是同步执行，直接是完成或失败状态，直接执行他们的回调
    switch(that.status){
        case "pendding":
        that.fulfilledCallBackList.push(onFulfilledCallBack);
        that.rejectedCallBackList.push(onRejectedCallBack);
        break;
        case "fulfilled":
        onFulfilledCallBack(that.value);
        break;
        case "rejected":
        onRejectedCallBack(that.reason);
        break;
    }
}
module.exports = Promise;