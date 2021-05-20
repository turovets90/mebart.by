$(document).ready(function(){

    /* перевод картинки svg в код */
    $('.icon img, img.icon').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
    /* end перевод картинки svg в код */



    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });




    $(function () {
        $('.se_btn .toggler').click(function(){
            $('.se_btn').removeClass('act');
            $(this).parent().toggleClass('act');
            $('.desc_box .close').click(function () {
                $(this).parent().parent().removeClass('act');
            });
            return false;
        });
        $(document).on('click', function(e) {
            if (!$(e.target).closest(".se_btn.act").length) {
                $(".se_btn.act").removeClass('act');
            }
            e.stopPropagation();
        });
    });


    $(' .faq_list_item').each(function(){
        var faq_toggler=$(this).find('.faq_list_item_head');
        $(faq_toggler).click(function(){
            $(faq_toggler).parent().toggleClass('act');
            $(faq_toggler).next().slideToggle();
        });
    });


    $(window).resize(function(){
        var header_height = $('header').outerHeight();
        $('header').next().css({'margin-top': header_height+'px'});
        $(window).scroll(function(){
            if ($(this).scrollTop() > header_height) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
            }
        });
        if($(this).width() < 1200){
            $('.b_content_top .title br').remove();
        }

    });
    $(window).resize();


    $(".scroll_down").click(function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top -60;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $('.country_label').click(function(){
        $(this).toggleClass('act');
    });


    $('.project_slider').each(function(){
        var item=$(this).find('.main_projects_row_item');
        var item2=$(this).find('.finished_objects_item');
        if(item.length > 2 || item2.length > 2){
            $(this).slick({
                dots: false,
                arrows: true,
                autoplay: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }else if($(window).innerWidth() < 991 && this.length > 1){
            $(this).slick({
                dots: false,
                autoplay: true,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
    });

    $('.standard_equipment_slider').slick({
        autoplay: true,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });







    var typed = new Typed("#typing", {
        strings: [ " г. изготавливаемкачественный слоеный брус."],
        typeSpeed: 70,
        backDelay: 1500,
        startDelay: 2500,
        loop: true,
        loopCount: 2,
    });

});





