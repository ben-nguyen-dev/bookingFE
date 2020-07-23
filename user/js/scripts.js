$(document).ready(function () {
	//UI FORM ELEMENTS
	var spinner = $('.spinner input').spinner({ min: 0 });
	
	$('#datepicker1').datepicker({
		showOn: 'button',
		buttonImage: 'images/ico/calendar.png',
		buttonImageOnly: true,
		dateFormat: "dd/mm/yy",
		minDate:0
	});
	$('#datepicker2').datepicker({
		showOn: 'button',
		buttonImage: 'images/ico/calendar.png',
		buttonImageOnly: true,
		dateFormat: "dd/mm/yy",
		minDate:1,
		maxDate:20
	});
	
	$( '#slider' ).slider({
		range: "min",
		value:1,
		min: 0,
		max: 10,
		step: 1
	});
	
	//CUSTOM FORM ELEMENTS
	$('input[type=radio],select, input[type=checkbox]').uniform();
	
	//SCROLL TO TOP BUTTON
	$('.scroll-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//HEADER RIBBON NAVIGATION
	$('.ribbon li').hide();
	$('.ribbon li.active').show();
	$('.ribbon li a').click(function() {
		$('.ribbon li').hide();
		if ($(this).parent().parent().hasClass('open'))
			$(this).parent().parent().removeClass('open');
		else {
			$('.ribbon ul').removeClass('open');
			$(this).parent().parent().addClass('open');
		}
		$(this).parent().siblings().each(function() {
			$(this).removeClass('active');
		});
		$(this).parent().attr('class', 'active'); 
		$('.ribbon li.active').show();
		$('.ribbon ul.open li').show();
		return true;
	});
	
	//LIGHTBOX
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square'});
	
	//TABS
	$('.tab-content').hide().first().show();
    $('.inner-nav li:first').addClass("active");

    $('.inner-nav a').on('click', function (e) {
        e.preventDefault();
        $(this).closest('li').addClass("active").siblings().removeClass("active");
        $($(this).attr('href')).show().siblings('.tab-content').hide();
		var currentTab = $(this).attr("href");
		if (currentTab == "#location")
		initialize();
    });

    var hash = $.trim( window.location.hash );
    if (hash) $('.inner-nav a[href$="'+hash+'"]').trigger('click');
	
	//CSS
	$('.top-right-nav li:last-child,.social li:last-child,.twins .f-item:last-child,.ribbon li:last-child,.room-types li:last-child,.three-col li:nth-child(3n),.reviews li:last-child,.three-fourth .deals .one-fourth:nth-child(3n),.full .deals .one-fourth:nth-child(4n),.locations .one-fourth:nth-child(3n),.pager span:last-child,.get_inspired li:nth-child(5n)').addClass('last');
	$('.bottom nav li:first-child,.pager span:first-child').addClass('first');
	
	//ROOM TYPES MORE BUTTON
	$('.more-information').slideUp();
	$('.more-info').click(function() {
		var moreinformation = $(this).closest('li').find('.more-information');
		var txt = moreinformation.is(':visible') ? '+ Thêm' : ' - Ẩn';
		$(this).text(txt);
		moreinformation.stop(true, true).slideToggle('slow');
	});
	
	//MAIN SEARCH 
	$('.main-search input[name=radio]').change(function() {
		var showForm = $(this).val();
		$('.form').hide();
		$("#"+showForm).show();
	}); 
	
	$('.form').hide();
	$('.form:first').show();
	$('.f-item:first').addClass("active");
	$('.f-item:first span').addClass("checked");
	
	$('.f-item .radio').click(function() {
		$('.f-item').removeClass("active");
		$(this).parent().addClass("active");
	});	
	
	// LIST AND GRID VIEW TOGGLE
	$('.view-type li:first-child').addClass('active');
		
	$('.grid-view').click(function() {
		$('.three-fourth article').attr("class", "one-fourth");
		$('.three-fourth article:nth-child(3n)').addClass("last");
		$('.view-type li').removeClass("active");
		$(this).addClass("active");
	});
	
	$('.list-view').click(function() {
		$('.three-fourth article').attr("class", "full-width");
		$('.view-type li').removeClass("active");
		$(this).addClass("active");
	});
	
	//LOGIN & REGISTER LIGHTBOX
	$('.close').click(function() {
		$('.lightbox').hide();
	});
	$(".login").click(function() {
		$("#login").css("display", "block");
	});
	$(".register").click(function() {
		$("#register").css("display", "block");
	});
	
	//MY ACCOUNT EDIT FIELDS
	$('.edit_field').hide();
    $('.edit').on('click', function (e) {
        e.preventDefault(); 
        $($(this).attr('href')).toggle('slow', function(){});
    });
	$('.edit_field a,.edit_field input[type=submit]').click(function() {
		$('.edit_field').hide(400);
	});
});
	

