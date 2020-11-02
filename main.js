function add(a, b){
    return a + b;
    
}
// console.log(add(6, 4))

function multiply(first, second){
    let i = 0;
    let answer = 0;
    while(i < second){
        answer += add(first, 0);
        i += 1;
    }
    return answer;
    
}
// let m = multiply(10, 4)
// console.log(m);

function power(x, n){
    let i = 0;
    let answer = 1;
    while(i < n){
        answer = multiply(x, answer)
        i += 1;
     }
     return answer;
}
// let p = power(2, 8)
// console.log(p)

function factorial(f){
    let result = f;
    if(f === 0 || f === 1){
        return 1;
    }
    while(f > 1){
        f--;
        result = multiply(result, f)
    }
    return result;
}

let fact = factorial(12);
console.log(fact);