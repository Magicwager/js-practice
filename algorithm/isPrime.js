//判断是否为素数，素数只能被1或自己整除
function isPrime(n){
    let divsor = 2;
    while(n>divsor){
        if( n%divsor == 0){
            return false
        }else{
            divsor++
        }
    }
    console.log(divsor)
    return true;
}

console.log(isPrime(139));
console.log(isPrime(17));

//有没有更快的方法？首先，一个数不能被大于它自身一半的数字的整除，这就减少50%
function isPrime(n){
    let divsor = 2;
    while(n>divsor&&divsor<Math.ceil(n/2)){
        if( n%divsor == 0){
            return false
        }else{
            divsor++
        }
    }
    console.log(divsor)
    return true;
}

console.log(isPrime(139));
console.log(isPrime(17));