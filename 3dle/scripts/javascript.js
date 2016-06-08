$(document).ready(function() {
    $(".js_intro_link").click(function() {
        $('html, body').animate({
        scrollTop: $("#top").offset().top 
        }, 1000);
    });
    $(".js_persona_link").click(function() {
        if(!$(".navbar").hasClass("shrink")){
            $('html, body').animate({
            scrollTop: $("#persona1").offset().top - 89
            }, 1000);
        }
        else{
            $('html, body').animate({
            scrollTop: $("#persona1").offset().top - $(".shrink").height()
            }, 1000);
        }
    });
     $(".js_persona1_link").click(function() {
        if(!$(".navbar").hasClass("shrink")){
            $('html, body').animate({
            scrollTop: $("#persona1").offset().top - 89
            }, 1000);
        }
        else{
            $('html, body').animate({
            scrollTop: $("#persona1").offset().top - $(".shrink").height()
            }, 1000);
        }
        
    });
      $(".js_persona2_link").click(function() {
        if(!$(".navbar").hasClass("shrink")){
            $('html, body').animate({
            scrollTop: $("#persona2").offset().top - 89
            }, 1000);
        }
        else{
            $('html, body').animate({
            scrollTop: $("#persona2").offset().top - $(".shrink").height()
            }, 1000);
        }
    });
      $(".js_persona3_link").click(function() {
        if(!$(".navbar").hasClass("shrink")){
            $('html, body').animate({
            scrollTop: $("#persona3").offset().top - 89
            }, 1000);
        }
        else{
            $('html, body').animate({
            scrollTop: $("#persona3").offset().top - $(".shrink").height()
            }, 1000);
        }
    });
      $(".js_scenario_link").click(function() {
        if(!$(".navbar").hasClass("shrink")){
            $('html, body').animate({
            scrollTop: $("#scenario1").offset().top - 89
            }, 1000);
        }
        else{
            $('html, body').animate({
            scrollTop: $("#scenario1").offset().top - $(".shrink").height()
            }, 1000);
        }
    });
      $(".js_scenario1_link").click(function() {
        if(!$(".navbar").hasClass("shrink")){
             $('html, body').animate({
            scrollTop: $("#scenario1").offset().top - 89
            }, 1000);
        }
        else{
             $('html, body').animate({
            scrollTop: $("#scenario1").offset().top - $(".shrink").height()
            }, 1000);
        }
    });
      $(".js_scenario2_link").click(function() {
        if(!$(".navbar").hasClass("shrink")){
            $('html, body').animate({
            scrollTop: $("#scenario2").offset().top - 89
            }, 1000);
        }
        else{
            $('html, body').animate({
            scrollTop: $("#scenario2").offset().top - $(".shrink").height()
            }, 1000);
        }
    });
       $(".js_scenario3_link").click(function() {
        if(!$(".navbar").hasClass("shrink")){
            $('html, body').animate({
            scrollTop: $("#scenario3").offset().top - 89
            }, 1000);
        }
        else{
            $('html, body').animate({
            scrollTop: $("#scenario3").offset().top - $(".shrink").height()
            }, 1000);
        }
    });
       $(".js_wireframe_link").click(function() {
        if(!$(".navbar").hasClass("shrink")){
             $('html, body').animate({
            scrollTop: $("#wireframe").offset().top - 89
            }, 1000);
        }
        else{
             $('html, body').animate({
            scrollTop: $("#wireframe").offset().top - $(".shrink").height()
            }, 1000);
        }
    });
       $(".js_gui_link").click(function() {
        if(!$(".navbar").hasClass("shrink")){
            $('html, body').animate({
            scrollTop: $("#gui").offset().top - 89
            }, 1000);
        }
        else{
            $('html, body').animate({
             scrollTop: $("#gui").offset().top - $(".shrink").height()
            }, 1000);
        }
    });
       
        $(window).scroll(function(e){
            e.preventDefault();
            if($(document).scrollTop() > 50){
                $(".navbar").addClass("shrink");
                $(".logo").addClass("small_img");
            }
            else{
                $(".navbar").removeClass("shrink");
                $(".logo").removeClass("small_img");
            }
        });
        $(".js_gallery_item").click(function(){
            $(".light_box").css("background-color: red;");
        });
});