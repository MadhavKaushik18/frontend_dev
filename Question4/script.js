$(function(){
$("#hide").click(function(){
$(".banner").hide()
})

$("#show").click(function(){
$(".banner").show()
})

$("#slide").click(function(){
$(".banner").slideToggle()
})

$("#fade").click(function(){
$(".banner").fadeToggle()
})

let i=0
setInterval(function(){
let b=$(".banner")
b.hide()
$(b[i]).fadeIn()
i=(i+1)%b.length
},5000)
})
