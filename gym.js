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

  	$(function(){
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

    $('.count').each(function(){
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
      })
    });

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
  });
  
        /*var  topScroll =$(window).scrollTop();
        var  windowHeight=$(window).height();
        var  totalHeight=topScroll + windowHeight;
        $.fn.showOnScroll = function(){
          
          return this.each(function(){
            var objectOffset=$(this).offset();
            var offsetTop=objectOffset.top;
              console.log(offsetTop);
            if(!$(this).hasClass('hidden')){
              $(this).css("opacity",0).addClass('hidden');
            }

            if(!$(this).hasClass('scroll-complete')){
              if(totalHeight > offsetTop){
                $(this).animate({"opacity": 1},3000).addClass('scroll-complete');
              }

            }            

          })
        }*/

        $(window).scroll(function(){
          
          /*topScroll =$(window).scrollTop();
          windowHeight=$(window).height();
          totalHeight=topScroll+ windowHeight;
            $('.font-icon').showOnScroll();*/
            var  topScroll =$(window).scrollTop();
            var  windowHeight=$(window).height();
            var  totalHeight=topScroll + windowHeight;

            var objectOffset=$('.font-icon').offset();
            var offsetTop=objectOffset.top;
              console.log(offsetTop);
              $('.font-icon').css("opacity",0)

            if(!$('.font-icon').hasClass('scroll-complete')){
              if(totalHeight > offsetTop){
                $('.font-icon').animate({"opacity":1},3000).addClass('scroll-complete');
              }

            }            

            
  });

                        