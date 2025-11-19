const a=document.getElementById("light");
const b=document.getElementById("dark");
const c=document.getElementById("blue");

a.onclick=function(){
    document.body.setAttribute("class","light");
    document.body.setAttribute("data-theme","light");
}

b.onclick=function(){
    document.body.setAttribute("class","dark");
    document.body.setAttribute("data-theme","dark");
}

c.onclick=function(){
    document.body.setAttribute("class","blue");
    document.body.setAttribute("data-theme","blue");
}
