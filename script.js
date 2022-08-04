
window.addEventListener('load', function() { AOS.init(); });

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
        arrows: true,
        responsive: [
            {
              breakpoint: 577,
              settings: {
                arrows: false,
                autoplay: true
              }
            }
        ]
    });
    $('.testimonials').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
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
        speed: 1000,
        pauseOnDotsHover: true,
        responsive: [
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
});


// MailerLite Universal
    (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '79332');