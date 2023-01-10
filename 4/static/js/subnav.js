$(function(){
	if( $(window).width() <= 991 ){
		$('.title-2.on').hide();
		$('.title-1.on').click(function(){
			if( $('.title-2.on').is(':hidden') ){
				$('.title-2.on').slideDown();
				$('.title-1.on .cn span').addClass('active');
			}else{
				$('.title-2.on').stop().slideUp();
				$('.title-1.on .cn span').removeClass('active');
			}
		})
	}
})
		