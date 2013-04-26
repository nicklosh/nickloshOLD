// JavaScript Document
$(document).ready(function(e) {
	// alert("hello world");
$.ajaxSetup({cache: false });
var textRed = function(){$(this).animate({color: "#ff0000"}, 200);}

	// main nav
	// hover on nav list
	// $("header nav li a").hover(
	// 	textRed,
	// 	function(){
	// 		$(this).animate({color: "#434343"}, 200);
	// 	});

	// main navigation 
	$("#main-nav li").click(function(e){
		e.preventDefault();
		var link = $(this).find('a').data('link');
		var load = ('#'+link);
		// $('section').slideUp();
		$('a').removeClass('active');
		$('.container').hide();
		$(load).show();
		$(this).find('a').addClass('active');
		$('section').hide().slideDown();
	});
	// music nav 
	$('section.open').find('a').on('click', function(event){
		event.preventDefault();
		var link = $(this).attr('href');
		var load = ('#'+link);
		$('a').removeClass('playing');
		$(this).addClass('playin');
		$('.main').hide();
		$(load).slideDown();
	});
	// video section
	$('.video-nav').click(function(){
		// hide main section
		// load section
		// slideDown
	})

});