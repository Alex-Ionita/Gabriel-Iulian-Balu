
AOS.init();

$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})

$(document).ready(function(){
    $('.category').slick({
        dots: true,
        arrows: true
    });
    $('.testimonials').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        pauseOnDotsHover: true
    });
    $('.ss-examples').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        pauseOnDotsHover: true
    });
});
