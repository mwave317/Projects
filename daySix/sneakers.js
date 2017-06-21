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
    $(".saying").hide();
    $(".fit").hide();
    $(".runners").show();
     $('#size').css('border-bottom', 'solid 1px pink');
     $('#details').css('border-bottom', 'solid 3px pink');
     $('#stars').css('border-bottom', 'solid 1px pink');
     $('#details').css('color', "rgb(185,67,44)");
     $('#stars').css('color', "rgb(255,148,145)");
     $('#size').css('color', "rgb(255,148,145)");
     
});

$("#size").click(function() {
    $(".runners").hide();
    $(".saying").hide();
     $(".fit").show();
     $('#size').css('border-bottom', 'solid 3px pink');
     $('#details').css('border-bottom', 'solid 1px pink');
     $('#stars').css('border-bottom', 'solid 1px pink');
     $('#size').css('color', "rgb(185,67,44)");
     $('#stars').css('color', "rgb(255,148,145)");
     $('#details').css('color', "rgb(255,148,145)");


});

$("#stars").click(function() {
    $(".fit").hide();
    $(".runners").hide();
    $(".saying").show();
     $('#size').css('border-bottom', 'solid 1px pink');
     $('#details').css('border-bottom', 'solid 1px pink');
     $('#stars').css('border-bottom', 'solid 3px pink');
     $('#stars').css('color', "rgb(185,67,44)");
     $('#size').css('color', "rgb(255,148,145)");
     $('#details').css('color', "rgb(255,148,145)");
     
});










    
