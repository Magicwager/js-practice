function fun2() {
    let err = null;
    let start = Date.now()-startTime;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(err){
                reject(err);
            }else{
                resolve(`fun2 start:${start}\tend:${Date.now()-startTime}`);
            }
        },1000)
    })
  }

  //import Promise from './promise_.js'
/* new Promise.all([fun1(),fun2()]).then(data=>{
  
  }) */
  //let Promise = require ('./promise_.js')

  let p1 = new Promise((resolve,reject)=>{
      //异步任务
      setTimeout(()=>{
        let num = Math.random();
        if(num>.5){
            resolve("success");
        }else{
            reject("faild");
        }
      },1000)
      //同步任务
      /* let num = Math.random();
      console.log(num)
      if(num>.5){
          resolve("success");
      }else{
          reject("faild");
      } */
     
  })
  //then 会返回一个promise，并且，它的状态取决与前一个then的返回结果
   p1.then((value)=>{
    console.log(value)
    //return `p1 ${value}`
    throw Error;
  },(reason)=>{
    console.log(reason)
    return `p1 ${reason}`
  }).then((value)=>{
    console.log(`p2 success-p1 value: ${value}`)
  },(reason)=>{
    console.log(`p2 failed-p1 reason: ${reason}`)
  })


