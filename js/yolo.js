// JavaScript Document
$(document).ready(function(e) {
	// alert("hello world");
$.ajaxSetup({cache: false });
// var textRed = function(){$(this).animate({color: "#ff0000"}, 200);}

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
	// nav 
	$('section.open').find('a').on('click', function(e){
		e.preventDefault();
		var link = $(this).attr('href');
		var load = ('#'+link);
		$(this).closest('nav').find('a').removeClass('playing');
		$(this).addClass('playing');
		$(this).closest('div').find('.main').hide();
		// music only
		$(load).slideDown(); 
	});
	// video section
	$('.video-nav').find('a').on('click', function(){
		var link = $(this).attr('href');
		var linkid = ('div#'+link)
		var video = ('sections/video/'+link+'.html');
		$('div#video').find('.main').load(video, function(){
			$(this).slideDown('slow');
		})

	})
});