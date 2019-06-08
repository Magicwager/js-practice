/**
 * 生成一个在n和m之间生成随机整数
 */

 function random(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
 }
 console.log(random(10,10))

 /**
  * 随机获取数组中的元素
  */
  function getElementRandom(array){
    return array[random(0,array.length-1)]
  }
  console.log(getElementRandom([1,2]))

  /**
   * 打乱数组顺序
   */
  function randomArray(array){
    return array.sort(()=>{ return Math.random()-0.5})
  }
  console.log(randomArray([1,43,1,3,2,3,5,24,59,"32g"]))