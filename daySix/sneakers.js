$("button").click(function() {
    $("button").css("color", "white").css("background", "none").css("border-color", "white").text("ADDING TO CART");
    $('button').animate({'opacity': 1}, 300, function () {
    $(this).text('ADDED TO CART');
}).animate({'opacity': 1});
});
$("button").click(function() {
 let cart= parseInt($('p.items').val()*1+ 1);
    $("p.items").text("("+cart+")");
    parseInt($('p.items').val(cart)*1+ 1)
});
$("#details").click(function() {
    $("#saying").hide();
    $("#fit").hide();
});
    
