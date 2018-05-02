summeryRanges=array=>{
    let deRepArray =[];
    let obj ={};
    let rangeIdx =0,rangeArrays=[],rangeArray=[];
    let summeryRangeArray=[];
    //先去重
    array.forEach(ele=> {
        if(!obj[ele]){
            obj[ele]=true
            deRepArray.push(ele)
        }
    });
    //排序
    deRepArray.sort((a,b)=>a-b)
    console.log(deRepArray)
    //划分区间
    deRepArray.map((ele,idx,array)=>{
        if(idx==0){
            rangeArrays.push(rangeArray)
        }
        if(array[idx+1]-ele>1){
            rangeArray.push(ele)
            rangeArray=[];
            rangeArrays.push(rangeArray)
        }else{
            rangeArray.push(ele)
        }
    })
    //按照规则输出
    rangeArrays.map((ele,idx,array)=>{
        if(ele.length>1){
            summeryRangeArray[idx]=`${ele[0]}->${ele[ele.length-1]}`
        }else{
            summeryRangeArray[idx]=`${ele[0]}`
        }
    })
    return summeryRangeArray;
}
const arrayTest = [2,3,23,34,45,2,13,32,44,2,2,4,34,25,45,22,11,32,12,43];
const arrayTest2 = [-2,-23,-2,-2,-12,-3,-44,2,3,23,34,45,2,13,32,44,2,2,4,34,25,45,22,11,32,12,43]
const arrayTest3 = [-2]
console.log(summeryRanges(arrayTest))
console.log(summeryRanges(arrayTest2))
console.log(summeryRanges(arrayTest3))