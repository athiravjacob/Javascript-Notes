
function factorial(n){

   if((n === 0)||(n ===1)){
    return 1
   }
   else{
    return n* factorial(n-1)
   }
   
}
console.log(factorial(5))


function fibinocci(n){
  if(n<=1){
    return 1
  }else{
    return fibinocci(n-1)+fibinocci(n-2)
  }
}
console.log(fibinocci(5))