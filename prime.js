const arr=[1,2,0,19,6,7,8,13]
let prime=[],flag=0
for(let i of arr){
    if(i<=1){
        continue
    }
    else{
        for(let j=2;j<i/2;j++){
            if(i%j==0){
                flag++
             
            }
        }
        if(flag==0){
            prime.push(i)
        }
        flag=0
        
    }
}
console.log(prime)