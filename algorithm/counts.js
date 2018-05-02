/* 统计一个字符串出现最多的字母
给出一段英文连续的英文字符窜，找出重复出现次数最多的字母 */
var str="aaassjianlincioalwooowllg";
var str2="a";
var str3="";
function createCountObj (str){
    var strArray=str.split("");
    var obj={};
    for(var i=0;i<strArray.length;i++){
        if(!obj[strArray[i]]){
            obj[strArray[i]]=1;
        }else{
            obj[strArray[i]]=obj[strArray[i]]+1
        }
    }
    return obj;
}
function count(obj){
    var maxVal=0;
    var countObj;
    for (key in obj) {
        if(obj[key]>maxVal){
            maxVal=obj[key];
            countObj=key;
        }
    }
    return countObj
}
console.log(count(createCountObj(str)))