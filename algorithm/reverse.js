// 判断一个单词是否是回文？ 回文是指把相同的词汇或句子，在下文中调换位置或颠倒过来，产生首尾回环的情趣，叫做回文，也叫回环。比如 mamam redivider .
var word1 = "redivider";
var word2 = "wills";
function checkReverseWord (string){
    var stringNew = string.split('').reverse().join('');
    console.log(stringNew)
    return (string==stringNew)
}
console.log(checkReverseWord(word1))
console.log(checkReverseWord(word2))