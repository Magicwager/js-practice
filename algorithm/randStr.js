/* 随机生成一个指定长度的字符串
运用到从指定字符串中随机位置取一个字符，依次取指定个数组成字符串。随机位置的生产是通过随机生成小于指定字符串长度的随机数，这样就得知道字符串的长度
Math.random是随机生成0～1的随机数，乘以指定字符串长度就可以得到0～指定字符串长度的随机数，取整数就能得到随机位置
字符串截取某个位置的字符是str.charAt()方法
*/
function randomString(n) {  
    let str = 'abcdefghijklmnopqrstuvwxyz9876543210';
    let tmp = '',
        i = 0,
        l = str.length;
    for (i = 0; i < n; i++) {
      tmp += str.charAt(Math.floor(Math.random() * l));
    }
    return tmp;
  }
  console.log(randomString(83))