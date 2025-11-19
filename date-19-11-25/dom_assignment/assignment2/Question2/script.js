let d1={pizza:200,burger:120,pasta:150,fries:80}

function zz(o){
let p=o.map(a=>{
if(!d1[a]) throw "x"
return d1[a]
})
return p.reduce((x,y)=>x+y,0)
}

try{
console.log(zz(["pizza","burger"]))
console.log(zz(["pizza","abc","fries"]))
}catch(e){
console.log("wrong item")
}
