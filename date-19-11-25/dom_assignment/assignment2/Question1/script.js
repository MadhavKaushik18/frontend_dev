class x1{
constructor(n,m){this.n=n;this.m=m}
avg(){return this.m.reduce((a,b)=>a+b,0)/this.m.length}
g(){
let k=this.avg()
if(k>=90) return "A"
if(k>=75) return "B"
if(k>=50) return "C"
return "F"
}
}

let s1=new x1("aa",[90,80,70])
let s2=new x1("bb",[40,50,60])
let s3=new x1("cc",[95,98,92])

console.log(s1.n,s1.avg(),s1.g())
console.log(s2.n,s2.avg(),s2.g())
console.log(s3.n,s3.avg(),s3.g())
