//call stack  : 종이더미

function shower(){
    return "showering"
}
function eat(){
    let meal = cookFood()
    return `${meal}`
}
function cookFood(){
    let item = "eggs"
    return item;
}
function wakeUp(){
    shower();
    eat();
    console.log("goto work")
}

//재귀함수

function recursion(i){
    if( i === 5){
        return;
    }
    recursion(i+1);
}

recursion(1);

//헬퍼 메소드 재귀
function odd(arr){
    let res = [];

    function helper(arr){
        if(arr.length === 0) return;
        if(arr[0] % 2 !== 0){
            res.push(arr[0])
        }
        helper(arr.slice(1)) //2,3,4,5
    }
    helper(arr)
    return res;   
}
console.log(odd([1,2,3,4,5]))

//순수 재귀함수

function even(arr){
    let newarr = [];

    if(arr.length === 0){
        return newarr;
    }
    if(arr[0] % 2 === 0){
        newarr.push(arr[0]);
    }
    newarr = newarr.concat(even(arr.slice(1)));
    return newarr;
}
