$('.wyndham-vacation-slider').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    dots:false,
    slideBy:1,
    thumbs: false,
    thumbsPrerendered: false,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
     0:{items:1},
		 480:{items:1},
     767:{items:3},
		 992:{items:3},
     1200:{items:4}
    }
})

$('.latest-news-slider').owlCarousel({
    loop:true,
    margin:55,
    nav:true,
    dots:false,
    slideBy:1,
    thumbs: false,
    thumbsPrerendered: false,
    autoplay:true,
    autoplayHoverPause:true,
    responsive:{
     0:{items:1},
		 480:{items:1},
     768:{items:2},
	 992:{items:3},
     1200:{items:3}
    }
})

jQuery(function($) {'use strict',
	new WOW().init();
});

$(".mous-box a").on('click', function(e) {
	e.preventDefault();

   $('html, body').animate({
	   scrollTop: $(this.hash).offset().top
	 }, 1000, function(){
		window.location.hash = this.hash;
	 });

});


var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });