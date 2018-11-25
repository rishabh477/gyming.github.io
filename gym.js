$(document).ready(function(){
		$("#owl1").owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			autoplay:true,
			autoplayTimeout:1000,
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
    $("#slides").slidesjs({
        callback: {
            loaded: function(number) {
                $(".slidesjs-container").css("max-height", "300px");
                $(".slidesjs-previous.slidesjs-navigation").html('<i class="fa fa-angle-left" aria-hidden="true"></i>');
                $(".slidesjs-next.slidesjs-navigation").html('<i class="fa fa-angle-right" aria-hidden="true"></i>')
            }
        }
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
  
    var  topScroll =$(window).scrollTop();
    var  windowHeight=$(window).height();
    var  totalHeight=topScroll + windowHeight;
    
    $.fn.showOnScroll = function(direction,speed){
      return this.each(function(){
        var objectOffset=$(this).offset();
        var offsetTop=objectOffset.top;
        if(!$(this).hasClass('hide')){
          if(direction == "left"){
            $(this).css({"opacity":0,"left":"-150px","position":"relative"});
          }
          else if(direction=="bottom"){
            $(this).css({"opacity":0,"bottom":"-100px","position":"relative"});
            }
              $(this).css("opacity",0);
        }

        if(!$(this).hasClass('scroll-complete')){
          if(totalHeight > offsetTop){
            $(this).animate({"opacity": 1,"left":0,"bottom":0},speed)
          }
        }            
      })
    }

    $(window).scroll(function(){
      topScroll =$(window).scrollTop();
      windowHeight=$(window).height();
      totalHeight=topScroll + windowHeight;
      $('.font-icon').showOnScroll("right",2000);
      $('.mobile-img img').showOnScroll("left",1000);
      $('.map-img').showOnScroll("bottom",1000)
    });

    $(window).scroll(function(){
      topScroll =$(window).scrollTop();
      windowHeight=$(window).height();
      totalHeight=topScroll + windowHeight;
     
        $('.count').each(function(){
          var objectOffset=$('.all-num').offset();
          var offsetTop=objectOffset.top;
          if(!$(this).hasClass('showOnce')){
            if(totalHeight>offsetTop){
              $(this).prop('Counter',0).animate({
                  Counter: $(this).text()
              },{
                  duration: 3000,
                  easing: 'swing',
                  step: function (now) {
                    $(this).text(Math.ceil(now));
                }
              })
              $(this).addClass('showOnce');
            }
          }
        })
      })
});

                        