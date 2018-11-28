$(document).ready(function(){
	$("#owl1").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay:true,
		autoplayTimeout:2000,
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

    window.onscroll=function() {
  		fixtop();
      topscroll();
	  }

  	function fixtop() {
  		if(document.documentElement.scrollTop >50){
  			document.getElementsByClassName('header-lower')[0].classList.add('affix');
  		}
  		else{
  			document.getElementsByClassName('header-lower')[0].classList.remove('affix');
  		}
  	}

    function topscroll() {
      if(document.documentElement.scrollTop > 300){
        document.getElementById('scrollTop').style.display='block';
      }
      else{
        document.getElementById('scrollTop').style.display='none';
      }
      document.getElementById('scrollTop').addEventListener('click',scrollFunction);
      function scrollFunction(){
        document.documentElement.scrollTop=0;
      }
    }
  
    var  topScroll =$(window).scrollTop();
    var  windowHeight=$(window).height();
    var  totalHeight=topScroll + windowHeight;

    $(window).scroll(function(){
      topScroll =$(window).scrollTop();
      windowHeight=$(window).height();
      totalHeight=topScroll + windowHeight;
      
      $('.count').each(function(){
        var objectOffset=$('.content-right').offset();
        var offsetTop=objectOffset.top;
        if(!$(this).hasClass('showOnce')){
          if(totalHeight>offsetTop){
            $(this).prop('Counter',0).animate({
              Counter: $(this).text()},
                {
                  duration: 3000,
                  easing: 'swing',
                  step: function (now) {
                    $(this).text(Math.ceil(now));
                  }
                }
              )
            $(this).addClass('showOnce');
          }
        }
      });
           
     $(function(){ 
        var objectOffset=$('.content-right').offset();
        var offsetTop=objectOffset.top;
        if(!$('.content-right').hasClass('onetime')){
          if(totalHeight > offsetTop){
            var prog =$('.progress-bar')
            prog.eq(0).animate({width:"95%",easing:"linear"}, 2000)
            prog.eq(1).animate({width:'80%',easing:"linear"}, 2000)
            prog.eq(2).animate({width:'85%',easing:"linear"}, 2000)
            prog.eq(3).animate({width:'90%',easing:"linear"}, 2000)
          }
          $('.content-right').addClass('onetime');
        }
      })           
    })
})

    

                        