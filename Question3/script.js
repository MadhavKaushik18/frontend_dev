$(function(){
$(".question").click(function(){
$(this).next(".answer").toggle()
})

$(".question").hover(function(){
$(this).css("color","blue")
},function(){
$(this).css("color","black")
})

$(".question").dblclick(function(){
$(".answer").hide()
})

$(".inp").focus(function(){
$(this).closest(".item").css("background","#ffeccc")
})

$(".inp").blur(function(){
$(this).closest(".item").css("background","white")
})
})
