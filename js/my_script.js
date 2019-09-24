$(document).ready(function() {
    $("h2").addClass("underline");
    $("ul").addClass("border");
   

    $("#specials_btn").click(function() {
        $("par1").slideToggle(2000);
    });
    
    $("#button_effects1").click(function() {
        $('#par1').slideToggle(1000, 0.5);
    });
    $("#button_effects1").click(function() {
        $('#par1').slideToggle(1000, 0.5);
    });
    $("#button_effects3").click(function() {
        $('#par1').slideToggle(1000, 0.5);
    });
    $("#button_effects3").click(function() {
        $('#par1').slideToggle(1000, 0.5);
    });
    $("#button_effects9").click(function() {
        $("#card1").toggleClass("display-none");    
        $("#card2").toggleClass("display-inline"); 
        $(this).text($(this).text() == 'Return' ? 'Specials' : 'Return');
    });
        
   
    $("#button_effects1").mouseenter(function() {
        $('#button_effects1').fadeTo(300, 0.5);
    });
    $("#button_effects1").mouseleave(function() {
        $('#button_effects1').fadeTo(300, 1);
    });
    $("#button_effects2").mouseenter(function() {
        $('#button_effects2').fadeTo(300, 0.5);
    });
    $("#button_effects2").mouseleave(function() {
        $('#button_effects2').fadeTo(300, 1);
    });
    $("#button_effects3").mouseenter(function() {
        $('#button_effects3').fadeTo(300, 0.5);
    });
    $("#button_effects3").mouseleave(function() {
        $('#button_effects3').fadeTo(300, 1);
    });
    $("#button_effects4").mouseenter(function() {
        $('#button_effects4').fadeTo(300, 0.5);
    });
    $("#button_effects4").mouseleave(function() {
        $('#button_effects4').fadeTo(300, 1);
    });
    $("#button_effects5").mouseenter(function() {
        $('#button_effects5').fadeTo(300, 0.5);
    });
    $("#button_effects5").mouseleave(function() {
        $('#button_effects5').fadeTo(300, 1);
    });
    $("#button_effects6").mouseenter(function() {
        $('#button_effects6').fadeTo(300, 0.5);
    });
    $("#button_effects6").mouseleave(function() {
        $('#button_effects6').fadeTo(300, 1);
    });
    $("#button_effects7").mouseenter(function() {
        $('#button_effects6').fadeTo(300, 0.5);
    });
    $("#button_effects7").mouseleave(function() {
        $('#button_effects6').fadeTo(300, 1);
    });
    $("#button_effects8").mouseenter(function() {
        $('#button_effects6').fadeTo(300, 0.5);
    });
    $("#button_effects8").mouseleave(function() {
        $('#button_effects8').fadeTo(300, 1);
    });
    
     $("#button_effects9").mouseenter(function() {
        $('#button_effects9').fadeTo(500, 0.5);
    });
    $("#button_effects9").mouseleave(function() {
        $('#button_effects9').fadeTo(300, 1);
    });
});
