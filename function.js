$(document).ready(function ()  {
    $('.mobile-menu__close').css({display: 'none'});

    $('.mobile-menu__button-open').click(function () {
        $('.mobile-menu__open').hide();
        $('.mobile-menu__close').show();
        $(this).animate({height: 'auto'});

        // $('.mobile-menu__close').css("display", "block");
        // $('header').animate({height: '14em'})


    });
    $('.mobile-menu__button-close').click(function () {
        $('.mobile-menu__close').hide();
        $('.mobile-menu__open').show();
        $(this).animate({height: 'auto'})
    });




});

