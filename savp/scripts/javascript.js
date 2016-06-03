$(document).ready(function(){
	$(".js_to_top").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top 
    }, 1000);
});
	$("#js_about_link").click(function() {
    $('html, body').animate({
        scrollTop: $("#about_background").offset().top - 125
    }, 1000);
});
	$("#js_portfolio_link").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio_background").offset().top - 129
    }, 1000);
});
    $("#js_contact_link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact_background").offset().top - 125
    }, 1000);
});
    $("#js_blog_link").click(function() {
    $('html, body').animate({
        scrollTop: $("#blog_background").offset().top - 129
    }, 1000);
});
});