$(document).ready(function() {
    $('#mobile_btn').on('click',function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll',function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight ();

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }
        
    })
});

