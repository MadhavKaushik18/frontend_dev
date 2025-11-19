function pp(n,p){
this.n=n
this.p=p
}
pp.prototype.d=function(x){
return this.p-(this.p*(x/100))
}

let a=new pp("a",100)
let b=new pp("b",500)
let c=new pp("c",999)

console.log(a.n,a.d(10))
console.log(b.n,b.d(25))
console.log(c.n,c.d(50))
