$(function(){
let h=new Date().getHours()
if(h<12){$("#greet").text("Good Morning")}
else if(h<18){$("#greet").text("Good Afternoon")}
else{$("#greet").text("Good Evening")}

$("#change-greet").click(function(){
$("#greet").text("You are capable of amazing things")
})

$("#toggle-msg").click(function(){
$("#welcome-msg").toggle()
})

$("#greet").click(function(){
alert("Greeting clicked")
})
})
