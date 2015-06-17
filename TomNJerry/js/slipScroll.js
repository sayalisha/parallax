$(document).ready(function(){
	
	var setLogo = function() {
		
		$('.moveable').each(function() {
			$(this).css('top',
			$('.default').offset().top -
			$(this).closest('.container_scroll').offset().top);
		});
	};
	 
	$(document).scroll(function() {
	  setLogo();
	  //setInfiniteScroll();
	});
	 
	setLogo();
	//setInfiniteScroll();
	
});

function setInfiniteScroll()
{
	if (document.documentElement.clientHeight + $(window).scrollTop() >= $(document).height()) {
	    $(document).scrollTop(0)
	} else if ($(window).scrollTop() < 0) {
	    $(document).scrollTop($(document).height())
	}
}
