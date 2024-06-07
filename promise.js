// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const success = true
//         if(success) resolve("Promise resolved")
//         else reject("OOPS!")
//     },2000)
// })


// myPromise
//     .then(result=> console.log(result))
//     .catch(error => console.log(error))

// function selectItems(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//             const success = true; // Change to true to test successful case
//             if (success) {
//                 console.log("Items Selected");
//                 resolve();
//             }
//              else {
//                 reject("Oops! Something went wrong");
//             }
//         }, 1000);
//     })
// }
// function ProceedToPay(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
           
//                 console.log("Payment Done")
//                 resolve()
            
//         },2000)
//     })
// }

// selectItems()
//     .then(ProceedToPay)
//     .catch(err=>console.log(err))

//.any(),.all(),allSettled(),race()

const selectItem =function(){
    return new Promise((res,rej)=>{
        let s=false
        if(s){
             setTimeout(()=>res("Items Selected"),1000)
        }else rej("OOps")
    })
       
       
}
const proceedPay =function(){
    return new Promise((res,rej)=>{
        setTimeout(()=>res("Proceed to pay"),1000)
    })
    
}

Promise.allSettled([selectItem(),proceedPay()]).then(res=>console.log(res))
.catch(err=>console.log(err))
Promise.any([selectItem(),proceedPay()]).then(res=>console.log(res))
.catch(err=>console.log(err))
Promise.race([selectItem(),proceedPay()]).then(res=>console.log(res))
.catch(err=>console.log(err))
Promise.all([selectItem(),proceedPay()]).then(res=>console.log(res))
.catch(err=>console.log(err))

