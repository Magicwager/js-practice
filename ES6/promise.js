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

new Promise.all([fun1(),fun2()]).then(data=>{
  
  })
  