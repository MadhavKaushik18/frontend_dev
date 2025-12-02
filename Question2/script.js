$(function(){
$(".product").click(function(){
$(this).toggleClass("highlight")
if($(this).data("stock")==="no"){alert("Out of stock")}
})

$(".fav").click(function(e){
e.stopPropagation()
$(this).toggleClass("selected")
})
})
