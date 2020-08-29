$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  dots: false,
                  arrows: false
                }
            }
        ]
      });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
  

    // $('.catalog-item__back').each(function(i){
    //     $(this).on('click', function(e){
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })
    function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
    //modal
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order_done, #order').fadeOut('slow');
    });

    $(".button_mini").each(function(i){
        $(this).on('click', function (){
            $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
        });
    });
    // $(".consultation-form").validate(); 
    // $("#consultation form").validate({
    //     rules: {
    //         name: 'required',
    //         phone: 'required',
    //         email: {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         name: "твое имя",
    //         phone: "твой номер телефона",
    //         email: {
    //           required: "твой электронный адрес",
    //           email: "некоректный адрес почты"
    //         }
    //       }
    // }); 
    // $("#order form").validate(); 

    function validateForms(form){
        $(form).validate({
            rules: {
                name: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "твое имя",
                phone: "твой номер телефона",
                email: {
                  required: "твой электронный адрес",
                  email: "некоректный адрес почты"
                }
              }
        }); 
    }

    validateForms(".feed-form_mt25");
    validateForms("#consultation-form");
    validateForms("#order form");

    $('input[name=phone]').mask("+38  (999) 999-99-99");

    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find('input').val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #order_done').fadeIn('slow');



            $('form').trigger('reset');
        });
        return false;
    });
    //smooth scroll and pageup
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1600){
                $('.pageup').fadeIn();
            }else{
                $('.pageup').fadeOut();
            }
        });
        
        $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
  });
  