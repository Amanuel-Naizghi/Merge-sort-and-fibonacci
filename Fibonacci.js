console.log('welcome A$D');
console.log('Fibonacci using iteration');
function fibs(n){
    let first=0;
    let second=1;
    let third=0
    let result=[0,1];
    while(n>=2){
        third=first+second;
        first=second;
        second=third;
        result.push(third);
        n--;
    }
    return result;
}
console.log(fibs(8));
console.log('Fibonacci using recursion');

function fibsRec(){
    let result=[];
    let myFibGenerator=(n)=>{
        if(n<2){
            return n;
        }
        else{
            return myFibGenerator(n-1)+myFibGenerator(n-2);
        }
    }

    let myFibCaller=(num)=>{
        for(let i=0;i<=num;i++){
            result.push(myFibGenerator(i));
        }
        return result
    }
    return {myFibCaller,myFibGenerator};
}
let test=fibsRec().myFibCaller(8);
console.log(test);

