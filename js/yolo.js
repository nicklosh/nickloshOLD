// JavaScript Document
$(document).ready(function(e) {
	// alert("hello world");
$.ajaxSetup({cache: false });
var textRed = function(){$(this).animate({color: "#ff0000"}, 200);}

	// main nav
	// hover on nav list
	$("header nav li a").hover(
		textRed,
		function(){
			$(this).animate({color: "#434343"}, 200);
		});

	// main navigation
	$("header nav li").click(function(e){
		e.preventDefault();
		var link = $(this).find('a').data('link');
		var load = ('#'+link);
		// $('section').slideUp();
		$('a').removeClass('active');
		$('.container').hide();
		$(load).show();
		$(this).find('a').addClass('active');
		$('section').slideDown();
	});

	// second nav
	$('section.open').find('a')
	// .hover(
	// 	textRed,
	// 	function(){
	// 		$(this).animate({color:'#969696'})
	// 	}
	// )
	.on('click', function(event){
		event.preventDefault();
		$('a').removeClass('playing');
		$(this).addClass('playing');
		// $('.main').load('/sections/music/jungle.html');
	});

	// footer links
	$("footer").find('a').hover(
		function(){
			$(this).animate({backgroundColor: "#ff0000"}, 200);
		},
		function(){
			$(this).animate({backgroundColor:"#969696"}, 200);
		}
	);
});