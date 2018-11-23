$(document).ready(function(){
		$("#owl1").owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			autoplay:true,
			autoplay:400,
			animateOut: 'slideOutRight',
			animateIn: 'slideInX',
		responsive:{
    		0:{
        		items:1
    			},
    		600:{
        		items:3
    			},
   		    1000:{
        		items:6
    			}
			}
		})
});
  	$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
  	$(function() {
      $('#slides').slidesjs({
        width: 700,
        height: 400,
        navigation: {
          effect: "fade"
        },
        pagination: {
          effect: "fade"
        },
        effect: {
          fade: {
            speed: 1000
          }
        },
        play: {
          effect: "fade",
          auto: true
        }
      });
    });

    window.onscroll=function () {
		fixtop();
	  }

  	function fixtop() {
  		if(document.documentElement.scrollTop >50){
  			document.getElementsByClassName('header-lower')[0].classList.add('affix');
  		}
  		else{
  			document.getElementsByClassName('header-lower')[0].classList.remove('affix');
  		}
  	}