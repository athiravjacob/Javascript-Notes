let person =[{a:10,b:20,c:20},{a:20,b:20}]
let sum=0
for(let key of person){
//  sum=sum+ Object.values(key).reduce((acc,curr)=>acc+curr)
console.log(Object.values(key))
  
}
console.log(sum)