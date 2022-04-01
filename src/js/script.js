$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            items:1,
            margin:10,
            nav:true,
            navText : ['<img src="icons/ArrowPrev.png" alt="ArrowPrev">','<img src="icons/ArrowLast.png" alt="ArrowLast">'],
            responsive:{
                0:{
                    nav:false
                },
                732:{
                    nav:false
                },
                1000:{
                    items:1
                }
            }
        }
    );
  });
  