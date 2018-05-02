groupBy = (arr, callback) => {
    const obj = {};
    for (i in arr) {
        let prop = callback.call(this,arr[i]);
        if (!obj[prop]) {
            obj[prop] = new Array;
            console.log(obj[prop])
            obj[prop] = obj[prop].push(arr[i]);
        } else {
            obj[prop] = obj[prop].push(arr[i]);
        }
    }
    return obj
}
const arrtest = ["javascript","css","bootstrap","java","less"];
//groupBy(arrtest,item=>item.length)

var text = `<%=hello world%><%=hello world%><%=hello world%>`
var result = text.replace(/<%=/g, `{{`).replace(/%>/g, `}}`)
console.log(result)