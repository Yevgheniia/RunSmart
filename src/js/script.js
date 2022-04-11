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
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});
  

  