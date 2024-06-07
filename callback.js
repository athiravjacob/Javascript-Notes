function selectItems(callback){
    setTimeout(()=>{
        console.log("Items Selected");
        callback()
    },2000)

}

function updateCart(callback){
    setTimeout(()=>{
        console.log("Cart Updated");
        callback()
    },2000)
  
}
 
function proceedToPay(){
    setTimeout(()=>{
        console.log("Proceed To Pay");
    },2000)
}

selectItems(()=>{
        updateCart(()=>{
            proceedToPay()
        })
    })