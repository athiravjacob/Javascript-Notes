const a=[[{a:1,b:3},{a:3,b:4}],{a:6,b:9},[{a:10},{a:10},[{a:1,b:2},{a:1,b:2}]]]
let flatArr=a.flat(Infinity)
    let sum=0
for(let i of flatArr){
  sum=sum+Object.values(i).reduce((acc,curr)=>acc+curr,0)
}
    console.log(sum)

