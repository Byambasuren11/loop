const number=3452;
let sum=0;
let m=number.toString();
console.log(m.length)
for(let i=0; i<=m.length-1; i++){
   let num=Number(m)
    sum+=num%10;
    num=parseInt(num/10);

    console.log(sum)
    
}
console.log(sum)
 const i="*"
 //15
 let n=5;
let l=0;
 for(let i=n; i<=0; i--){
    l-=n;
    console.log(l)
 }