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
  let Promise = require ('./promise_.js')

  let p1 = new Promise((resolve,reject)=>{
     /*  setTimeout(()=>{
        let num = Math.random();
        if(num>.5){
            resolve("success");
        }else{
            reject("faild");
        }
      },1000) */
      let num = Math.random();
      if(num>.5){
          resolve("success");
      }else{
          reject("faild");
      }
     
  })

  p1.then((value)=>{
    console.log(value)
  },(reason)=>{
    console.log(reason)
  })