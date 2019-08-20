/**
 *  防抖函数
 *  定义：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。(不是很准确，因为在提交表单等需要立马执行一次的场景就不符合这种定义)
 *       当持续触发事件时，防抖函数会合并事件且不会去触发事件，当一定时间内没有触发再这个事件时，才真正去触发事件。
 * 
 * 应用场景

例如某个resize事件，我们想resize触发时去执行某个函数，但是resize是在窗口不停拖动会不断触发的，而很多时候我们不必拖动过程中不停执行那个函数这样很消耗性能也没有必要。所以就需要一个防抖，设定一个时间间隔让它一定时间间隔后执行
防止提交表单按钮被多次点击发送多次请求（这个需要对比上面做点小修改）

 */

 /**
  * 非立即执行版本
  * 触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
  * 
  * @param {any} operateFunc 
  * @param {any} interval 
  */
 function debounce(operateFunc,interval){
     let timer;
    return ()=>{
        let context = this;
        let args = arguments;
        if(timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(()=> {
            operateFunc.apply(context,args)
        }, interval);
    }
 }

 /**
  * 立即执行版本
  * 触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。
  * 
  * @param {回调函数} operateFunc 
  * @param {防抖时间间隔} interval 
  */
export const debounce=(operateFunc,interval)=>{
    let timer;
    return ()=>{
        let context = this;
        let args = arguments;
        let callNow = !timer;
      if (timer){
        cleatTimeout(timer);
        timer = null;
      } 
      timer = setTimeout(() => {
        timer = null;
      },interval)
      if(callNow) operateFunc.apply(context,args)
     }
}

