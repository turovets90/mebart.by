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

    $('.se_btn').each(function(){
        var toggler=$(this).find('.toggler');
        $(toggler).click(function(){
            //$('.se_btn').removeClass('.act');
            //$('.toggler').next().slideUp();
            $(toggler).parent().toggleClass('act');
            $(toggler).next().slideToggle();
        });
    });



    /*

    $(".main_slider").slick({
        infinite: true,
        arrows: false,
        dots: true,
        //autoplay: true,
        //speed: 3000,
        //autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.amount .down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.amount .up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    $('.product_slider').each(function(){
        var item=$(this).find('.product_slider_item');
        if(item.length > 5){
            $(this).slick({
                autoplay: false,
                dots: true,
                arrows: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }else if($(window).innerWidth() < 575 && this.length > 1){
            $(this).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }else if($(window).innerWidth() < 767 && this.length > 2){
            $(this).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1
            });
        }else if($(window).innerWidth() < 991 && this.length > 3){
            $(this).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1
            });
        }

    });



    $(".reviews_slider").slick({
        infinite: true,
        arrows: true,
        dots: true,
        //autoplay: true,
        //speed: 3000,
        //autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });



    $('.sidebar_catalog .arrow').click(function(){
        $(this).next().slideToggle();
        $(this).parent().toggleClass('active');
    });

    $('.product_item').each(function(){
        var pr_item_slider=$(this).find('.product_item_img_slider');
        $(pr_item_slider).slick({
            infinite: true,
            arrows: true,
            dots: false,
            //autoplay: true,
            //speed: 3000,
            //autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });


    $('.range_values').each(function(){
        var range=$(this).find('.range');
        var rub_left=$(this).find('.rub_left');
        var rub_right=$(this).find('.rub_right');
        $(range).slider({
            range: true,
            min: 0,
            max: 10000,
            values: [0, 10000],
            step: 10,
            slide: function(event, ui) {
                $(rub_left).text(ui.values[0]);
                $(rub_right).text(ui.values[1]);
            }
        });
        $(rub_left).text($(range).slider("values", 0));
        $(rub_right).text($(range).slider("values", 1));
    });


    $(".select li span").click(function(){
        $(this).parents(".dropdown").find('.dropdown-toggle').html($(this).text());
        $(this).parents(".dropdown").find('.dropdown-toggle').val($(this).data('value'));
    });


    $('.filter_btn').click(function(){
        $('.filter_body').slideToggle();
        $(this).toggleClass('act');
    });


    if($('.category_slider .category_item').length > 5){
        $('.category_slider').slick({
            autoplay: false,
            dots: true,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.category_slider .category_item').length > 1){
        $('.category_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }else if($(window).innerWidth() < 767 && $('.category_slider .category_item').length > 2){
        $('.category_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    }else if($(window).innerWidth() < 991 && $('.category_slider .category_item').length > 3){
        $('.category_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    }



    $('.product_img_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.product_img_slider_nav'
    });
    $('.product_img_slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product_img_slider',
        dots: false,
        focusOnSelect: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });


    $(function () {
        $('input, textarea').each(function () {
            $(this).blur(function(){
                if(!this.value){
                    $(this).removeClass('hide_label');
                }
                else{
                    $(this).addClass('hide_label');
                }
            });
            if ( !this.value ) {
                $(this).removeClass('hide_label');
            }
            else{
                $(this).addClass('hide_label');
            }
        });
    });

*/

});





