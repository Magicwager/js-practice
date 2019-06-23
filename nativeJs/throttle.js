/**
 *  定义：触发函数事件后，短时间间隔内无法连续调用，只有上一次函数执行后，过了规定的时间间隔，才能进行下一次的函数调用，这样当持续触发事件时，保证隔间时间触发一次事件。
 *  原理：对处理函数进行延时操作，若设定的延时到来之前，再次触发事件，则清除上一次的延时操作定时器，重新定时。
 */

 //定时器版本
 /**
  * 简单来说，这种方式就是通过闭包保存一个定时器Id，在函数的开头判断这个是否有定时器，如果没有的话就创建一个定时器，把外部传入的函数的执行包在这个定时器中。
  * 在定时器间隔时间后，会执行传入的操作函数，同时清楚定时器（为了下一个节流时间间隔可以再次执行一次）。
  * 而在定时器间隔时间内触发的话，定时器存在着，不会再次执行传入的操作函数。
  */

 /**
  * 节流函数
  * @param {function} operate 操作函数
  * @param {number} interval 节流时间间隔
  */
  
 function throttle(operateFunc,interval){
    let timeout;
    return () => {
        let context = this;
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                clearTimeout(timeout)//注意清掉定时器
                timeout = null;
                operateFunc.apply(context, args)
            }, interval)
        }

    }
 }

 //时间戳版本
 /**
  * 
  */

  /**
   * 节流函数
   * @param {any} operateFunc 操作函数
   * @param {any} interval 节流时间间隔
   */
  function throttle(operateFunc,interval){
    let preTime = 0;
    return ()=>{
        let now = Date.now();
        if(now>preTime+interval){
            operateFunc.apply(this,arguments);
            preTime = now;
        }
    }
  }