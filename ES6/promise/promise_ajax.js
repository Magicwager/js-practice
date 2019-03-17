//用promise实现简单的Ajax操作

/* 
XMLHttpRequest属性
1. readyState
    0~4:
        0-Uninitialized，XMLHttpRequest 已创建或被abort()重制
        1-Open open方法已调用，send方法还没调用
        2-Sent  send()方法已调用，HTTP请求已发送到web服务器，还未就收响应
        3-Receiving 所有响应头接受完，响应体开始接收，但未完成
        4-Loaded HTTP响应全完成
    每次这个状态改变都会触发onreadystatechange事件句柄
2. resposeText
    目前为止接收到的响应体
3. responseXML
    请求的响应，解析为XML并作为Document 对象返回
4. status  
    http状态码
5. statusText

*/
function getRequest(url){
    let promise = new Promise((resolve,reject)=>{
        let request = new XMLHttpRequest();
        let handleStateChange = function(){
            if(this.readyState !==4){
                return
            }
            if(this.status==200){
                resolve(this.response)
            }else{
                reject(new Error(this.statusText))
            }
        }
        request.onreadystatechange = handleStateChange;
        request.open("GET",url);
        request.responseType="JSON";
        request.setRequestHeader("Accept","application/json");
        request.send();
    })
    return promise;
}

getRequest('get/json').then((response)=>{
    console.log(response)
},(err)=>{
    console.log(err)
})