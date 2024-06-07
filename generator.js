// function* gene(){
//     console.log("Hey")
//     let count =0
//     yield "1st pause";
//     count++
//     yield "2nd pause";
//     count++
//     console.log(count)

// }
// const it = gene()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

function* even(){
   n=50
    while(n!=0){
        yield n
        n=n-2 
    }
}
const it=even()
for(let i of it){
    console.log(i)
}

//or

function* gene(){
    let n=2;
  while (n<100){
        yield n
        n=n+2
    }
}
let itk=gene()

    while(!itk.next().done){
        console.log(itk.next())
    }
